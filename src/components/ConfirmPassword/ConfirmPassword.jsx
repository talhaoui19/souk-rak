"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PasswordResetConfirm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage("كلمتا المرور غير متطابقتين");
      return;
    }

    try {
      const response = await fetch("/api/password-reset-confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword })
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        router.push("/login");
      } else {
        setMessage(data.error);
      }
    } catch (error) {
      setMessage("حدث خطأ. يرجى المحاولة مرة أخرى");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-6">تعيين كلمة مرور جديدة</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="كلمة المرور الجديدة"
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="تأكيد كلمة المرور"
          required
          className="w-full p-2 border rounded"
        />
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          تعيين كلمة المرور
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}