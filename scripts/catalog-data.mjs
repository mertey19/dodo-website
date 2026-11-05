import { catalog } from "../data/catalog.ts";
import { products } from "../data/products.ts";
import { campaigns } from "../data/campaigns.ts";
import { businessInfo } from "../data/business.ts";
import { adaklikService } from "../data/adaklik.ts";

const grouped = catalog.groups.flatMap((group) => group.productIds);
if (new Set(grouped).size !== products.length || grouped.length !== products.length || grouped.some((id) => !products.some((product) => product.id === id))) {
  throw new Error("Every product must occur exactly once in the catalogue.");
}
process.stdout.write(JSON.stringify({ catalog, products, campaigns: campaigns.filter((item) => item.active), businessInfo, adaklikService }));
