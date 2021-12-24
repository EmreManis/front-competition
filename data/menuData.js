import navMenu from "../models/navMenu";

import menu1 from "../public/menu/menu1.png"
import menu2 from "../public/menu/menu2.png"

export const menuData=(
    new navMenu(["Yurt İçi Otelleri", "Termal Oteller", "Kıbrıs Otelleri", "Şehir Otelleri", "Kayak Otelleri", "Hafta Sonu Otelleri", "Otel Temaları"],["Antalya","Bodrum","Alanya","Marmaris","Didim","Fethiye","Çeşme","Ayvalık"],[1242, 255, 445, 1242, 255, 445, 1242, 255],[menu1, menu2]),
);