import "./globals.css";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Providers from "@/context/Providers";

export const metadata = {
  title: "Tienda Aritti",
  description: "Tienda de ropa femenina para todas ellas.",
  keywords: ['Shop', 'Ropa', 'ecommerce', 'remeras', 'sweaters', 'pantalones', 'lenceria', 'tienda', 'mujer'],
  openGraph: {
    title: "Tienda online Aritti",
    description: "Descubre todos nuestros productos",
    images: [
      {
        url: "/opengraph-ecommerce.webp",
        width: 1200,
        height: 630,
        alt: "Vista previa de Mi Tienda Online",
      },
    ],
    type: "website",
    author: "Ariana Nocetti",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
            <Providers>
              <Navbar/>
                <div className="h-[calc(100% - 200px)] pb-24">
                  {children}
                </div>
              <Footer/>
            </Providers>
      </body>
    </html>
  );
}
