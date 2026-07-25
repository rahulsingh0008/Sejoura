import { useEffect, useState } from "react";

type ToastItem = {
  id: string;
  message: string;
  variant?: "success" | "error" | "info";
  duration?: number;
};

let addToastInternal: ((t: Omit<ToastItem, "id">) => void) | null = null;

export function showToast({ message, variant = "info", duration = 4000 }: Omit<ToastItem, "id">) {
  if (addToastInternal) {
    addToastInternal({ message, variant, duration });
  } else {
    // Fallback to console if provider not mounted
    console[variant === "error" ? "error" : "log"]("Toast:", message);
  }
}

export function Toast({ message, variant = "info" }: { message: string; variant?: "success" | "error" | "info" }) {
  return (
    <div className={`glass px-4 py-3 rounded-lg shadow-md w-80 ${
      variant === "success"
        ? "border-green-200 bg-green-600/10 text-green-800"
        : variant === "error"
        ? "border-red-200 bg-red-600/10 text-red-800"
        : "border-slate-200 bg-white/6 text-slate-900"
    }`}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    addToastInternal = (t) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
      setToasts((s) => [...s, { id, ...t }]);
    };

    return () => {
      addToastInternal = null;
    };
  }, []);

  const remove = (id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  };

  useEffect(() => {
    toasts.forEach((t) => {
      if (t.duration && t.duration > 0) {
        const timer = setTimeout(() => remove(t.id), t.duration);
        return () => clearTimeout(timer);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts]);

  return (
    <>
      {children}

      <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`glass px-4 py-3 rounded-lg shadow-md transform transition-all duration-300 ease-out w-80 ${
              t.variant === "success"
                ? "border-green-200 bg-green-600/10 text-green-800"
                : t.variant === "error"
                ? "border-red-200 bg-red-600/10 text-red-800"
                : "border-slate-200 bg-white/6 text-slate-900"
            }`}
            onClick={() => remove(t.id)}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm">{t.message}</div>
              <button className="text-xs opacity-60">Dismiss</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToastProvider;