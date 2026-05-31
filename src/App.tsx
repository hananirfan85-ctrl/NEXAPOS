import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { supabase } from "./lib/supabase";
import { AppLayout } from "./components/layout/AppLayout";
import { lazy, Suspense } from "react";
const Sitemap = lazy(() => import("./pages/Sitemap"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Documentation = lazy(() => import("./pages/Documentation"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Inventory = lazy(() => import("./pages/Inventory"));
const POS = lazy(() => import("./pages/POS"));
const Sales = lazy(() => import("./pages/Sales"));
const Reports = lazy(() => import("./pages/Reports"));
const Records = lazy(() => import("./pages/Records"));
const Customers = lazy(() => import("./pages/Customers"));
const CashFlow = lazy(() => import("./pages/CashFlow"));
const Settings = lazy(() => import("./pages/Settings"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const FeaturePage = lazy(() => import("./pages/FeaturePage"));
const About = lazy(() => import("./pages/About"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const Terms = lazy(() => import("./pages/Terms"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ContactAdmin = lazy(() => import("./pages/ContactAdmin"));
const Contact = lazy(() => import("./pages/Contact"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const DemoVideo = lazy(() => import("./pages/DemoVideo"));
import { CookieConsent } from "./components/CookieConsent";

// Protected Route wrapper
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const [roleStatus, setRoleStatus] = useState<string | null>(null);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      toast.success("Back online!");
    };
    const handleOffline = () => {
      setIsOffline(true);
      toast.error("You are offline. Running in local mode.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (user && !isOffline) {
      if (user.email?.toLowerCase() === "hananirfan85@gmail.com") {
        setRoleStatus("admin");
        return;
      }

      let pollInterval: any;
      const checkRole = async () => {
        // First try the RPC in case RLS is blocking the table
        const { data: rpcData, error: rpcError } =
          await supabase.rpc("get_my_role");
        if (!rpcError && rpcData) {
          setRoleStatus(rpcData);
          if (rpcData !== "pending") clearInterval(pollInterval);
          return;
        }

        const { data, error } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .single();
        if (error) {
          console.error("Error fetching user role:", error);
        }

        if (data) {
          setRoleStatus(data.role);
          if (data.role !== "pending") clearInterval(pollInterval);
        } else {
          setRoleStatus("pending");
        }
      };

      checkRole();
      // Poll every 5 seconds while pending, as realtime isn't enabled by default in Supabase
      pollInterval = setInterval(checkRole, 5000);

      const subscription = supabase
        .channel("public:user_roles")
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "user_roles",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            setRoleStatus(payload.new.role);
            if (payload.new.role !== "pending") clearInterval(pollInterval);
          },
        )
        .subscribe();

      return () => {
        clearInterval(pollInterval);
        supabase.removeChannel(subscription);
      };
    }
    
    // If offline, assume the last known role status is verified so they can enter the app if previously logged in.
    if (user && isOffline && !roleStatus) {
       setRoleStatus('user');
    }
  }, [user, isOffline]);

  if (loading || (user && !roleStatus)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) return <Navigate to="/home" />;

  if (roleStatus === "pending") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Account Pending Approval
        </h2>
        <p className="text-gray-600 max-w-md mb-4 text-justify">
          You have successfully registered (<strong>{user.email}</strong>).
          However, access to the NEXA POS dashboard requires administrator
          approval.
        </p>
        <p className="text-gray-500 mb-8 text-sm">
          Please contact support when you verify your purchase, to let the
          administrator grant your permissions.
        </p>
        <button
          onClick={signOut}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return <>{children}</>;
}

// Admin only route wrapper
function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (!user || user.email !== "hananirfan85@gmail.com")
    return <Navigate to="/" />;

  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
        <CookieConsent />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="w-8 h-8 flex border-t-2 border-b-2 border-indigo-600 rounded-full animate-spin"></div></div>}>
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/demo" element={<DemoVideo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/features/:featureId" element={<FeaturePage />} />

            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="pos" element={<POS />} />
              <Route path="sales" element={<Sales />} />
              <Route path="cashflow" element={<CashFlow />} />
              <Route path="customers" element={<Customers />} />
              <Route path="reports" element={<Reports />} />
              <Route path="records" element={<Records />} />
              <Route path="settings" element={<Settings />} />
              <Route path="contact-admin" element={<ContactAdmin />} />
              <Route
                path="admin"
                element={
                  <AdminRoute>
                    <AdminPanel />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}
