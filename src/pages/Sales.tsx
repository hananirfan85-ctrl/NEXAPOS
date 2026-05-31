import React, { useEffect, useState } from "react";
import { supabase, Sale } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";
import { formatCurrency } from "../lib/utils";
import { format } from "date-fns";
import { FileText, ChevronRight, Trash2 } from "lucide-react";

export default function Sales() {
  const { user } = useAuth();
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSaleId, setSelectedSaleId] = useState<string | null>(null);
  const [saleItems, setSaleItems] = useState<any[]>([]);

  useEffect(() => {
    if (user) fetchSales();
  }, [user]);

  const fetchSales = async () => {
    setLoading(true);
    let offlineSales: any[] = [];
    try {
        const cached = localStorage.getItem("offline_sales");
        if (cached) {
            setSales(JSON.parse(cached));
        }
        const queued = localStorage.getItem("offline_sales_queue");
        if (queued) {
            offlineSales = JSON.parse(queued).map((q: any) => ({
                id: q.created_at, // rough ID spoof
                total_amount: q.p_total_amount,
                total_profit: q.p_total_profit,
                created_at: q.created_at,
                is_offline: true,
                items: q.p_items
            }));
        }
    } catch(e) {}

    if (!navigator.onLine) {
        setLoading(false);
        // Prepend offline sales 
        setSales(prev => {
           const dbSales = prev.filter(s => !(s as any).is_offline);
           return [...offlineSales, ...dbSales];
        });
        return;
    }

    const { data } = await supabase
      .from("sales")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
        localStorage.setItem("offline_sales", JSON.stringify(data));
        setSales([...offlineSales, ...data]);
    }
    setLoading(false);
  };

  const fetchItems = async (saleId: string) => {
    if (selectedSaleId === saleId) {
      setSelectedSaleId(null);
      return;
    }
    // Check if it's an offline sale
    const offlineItem = sales.find(s => s.id === saleId && (s as any).is_offline);
    if (offlineItem) {
       setSaleItems((offlineItem as any).items || []);
       setSelectedSaleId(saleId);
       return;
    }

    const { data } = await supabase
      .from("sale_items")
      .select("*, product:products(name)")
      .eq("sale_id", saleId);

    if (data) {
      setSaleItems(data);
      setSelectedSaleId(saleId);
    }
  };

  const deleteSale = async (e: React.MouseEvent, saleId: string) => {
    e.stopPropagation();
    if (
      !window.confirm(
        "Are you sure you want to permanently delete this sale record?",
      )
    )
      return;
    
    if (!navigator.onLine) {
       alert("Cannot delete records while offline.");
       return;
    }

    // Deleting the sale will cascade delete sale_items automatically in Supabase due to ON DELETE CASCADE
    await supabase.from("sales").delete().eq("id", saleId);

    if (selectedSaleId === saleId) setSelectedSaleId(null);
    fetchSales();
  };

  return (
    <div className="h-full flex flex-col space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Sales History</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex-1 overflow-auto flex flex-col">
        {loading ? (
          <div className="p-8 text-center text-gray-500">Loading sales...</div>
        ) : sales.length === 0 ? (
          <div className="p-8 text-center text-gray-500 flex flex-col items-center">
            <FileText size={48} className="opacity-20 mb-4" />
            <p>No sales recorded yet.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {sales.map((sale) => (
              <div key={sale.id} className="flex flex-col">
                <div
                  onClick={() => fetchItems(sale.id)}
                  className="p-4 hover:bg-gray-50 flex items-center justify-between cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 text-indigo-700 p-3 rounded-lg">
                      <FileText size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Sale {sale.id.split("-")[0].toUpperCase()}
                      </p>
                      <p className="text-sm text-gray-500">
                        {format(new Date(sale.created_at), "PPP at p")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        {formatCurrency(sale.total_amount)}
                      </p>
                      <p className="text-sm font-medium text-emerald-600">
                        Profit: {formatCurrency(sale.total_profit)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => deleteSale(e, sale.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                      <ChevronRight
                        size={20}
                        className={`text-gray-400 transition-transform ${selectedSaleId === sale.id ? "rotate-90" : ""}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Items Dropdown */}
                <>
                  {selectedSaleId === sale.id && (
                    <div className="overflow-hidden bg-gray-50 border-t border-gray-100">
                      <div className="p-4 pl-20 space-y-3">
                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Items in this sale
                        </h4>
                        {saleItems.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center text-sm max-w-lg"
                          >
                            <span className="font-medium text-gray-900 flex-1">
                              {item.product?.name || "Unknown Product"}
                            </span>
                            <span className="text-gray-500 w-24 text-center">
                              {item.quantity} x{" "}
                              {formatCurrency(item.unit_price)}
                            </span>
                            <span className="font-medium text-gray-900 w-24 text-right">
                              {formatCurrency(item.total_price)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
