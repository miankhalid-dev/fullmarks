"use client";

import { Star } from "lucide-react";
import { useCurrency } from "@/lib/currency-context";

const PRODUCTS = [
  {
    title: "AQA GCSE Chemistry — Complete Revision Notes",
    board: "AQA",
    type: "Notes",
    rating: "4.9",
    sales: "2,340",
    priceGBP: 8.99,
    badgeVariant: "navy",
  },
  {
    title: "Edexcel A-Level Maths — Past Papers 2015–2024",
    board: "Edexcel",
    type: "Past Papers",
    rating: "4.8",
    sales: "3,110",
    priceGBP: 12.5,
    badgeVariant: "orange",
  },
  {
    title: "IB Biology HL — Cell Biology Revision Notes",
    board: "IB",
    type: "Notes",
    rating: "4.9",
    sales: "1,275",
    priceGBP: 11.0,
    badgeVariant: "navy",
  },
  {
    title: "Cambridge IGCSE Economics — Full Notes Bundle",
    board: "CIE",
    type: "Notes",
    rating: "4.7",
    sales: "980",
    priceGBP: 10.99,
    badgeVariant: "navy",
  },
];

export default function ProductsSection() {
  const { formatPrice } = useCurrency();

  return (
    <section className="section fade-up" style={{ animationDelay: "0.36s" }}>
      <div className="section-heading-row">
        <h2 className="section-heading">Bestselling resources</h2>
        <a href="#" className="view-all-link">
          View all →
        </a>
      </div>
      <div className="product-grid">
        {PRODUCTS.map((p) => (
          <div className="product-card" key={p.title}>
            <div className="product-card__cover">[ cover ]</div>
            <div className="product-card__body">
              <div className="product-card__badges">
                <span className={`product-badge product-badge--board-${p.badgeVariant}`}>
                  {p.board}
                </span>
                <span className="product-badge product-badge--type">{p.type}</span>
              </div>
              <div className="product-card__title">{p.title}</div>
              <div className="product-card__meta">
                <Star size={13} fill="currentColor" aria-hidden="true" /> {p.rating} · {p.sales}{" "}
                sold
              </div>
              <div className="product-card__footer">
                <div className="product-card__price">{formatPrice(p.priceGBP)}</div>
                <div className="product-card__add">Add</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
