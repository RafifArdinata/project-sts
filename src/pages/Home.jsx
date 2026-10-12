import { Button } from "@/components/ui/button"; // 1. Import Button dari shadcn

const faqData = [
  {
    title: "Cara Mendaftar Akun",
    description: "Petunjuk langkah demi langkah mendaftar.",
  },
  {
    title: "Metode Pembayaran",
    description: "Daftar metode pembayaran yang didukung.",
  },
  {
    title: "Kebijakan Pengambilan",
    description: "Syarat dan ketentuan refund.",
  },
];

function FaqCard({ title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-3 text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mb-5 leading-relaxed text-gray-600">{description}</p>
      
      {/* 2. Gunakan Button dengan variant link atau ghost */}
      <Button variant="link" className="px-0 font-medium text-black hover:no-underline">
        Pelajari lebih lanjut →
      </Button>
    </div>
  );
}

export default function Faq() {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {faqData.map((item, index) => (
          <FaqCard key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}