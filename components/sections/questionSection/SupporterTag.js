import Link from "next/link";

import classes from "./questionSection.module.css";

const SupporterTag = () => {
  return (
    <div className={`hidden sm:flex flex-col w-1360 justify-center ${classes.supporterTag}`}>
      <div>
        <h1>Daha Fazla Tatil, TatilBudur!</h1>
        <p>
          1997 yılından bu yana binlerce kişiye otel, tur, uçak ve organizasyon
          hizmetleri sunan markamız, her geçen gün daha da büyüyerek
          hayalinizdeki tatili uygun fiyatlarla gerçeğe çevirme fırsatı sunuyor.
        </p>
        <h1>En Uygun Tatil Fırsatları</h1>
        <p>
          Tatilbudur.com ile unutulmaz bir tatil deneyimine hazır mısınız? Hem
          yurt içinde hem de yurt dışında birbirinden farklı konaklama
          seçenekleri ve zengin içerikli turlarıyla bütçenizi sarsmayacak tatil
          fırsatlarını sizlerle buluşturan acentemiz, otel ve tur hizmetleriyle
          kaliteli hizmetin yeni adresi olma yolunda ilerliyor.
        </p>
        <h1>Tatil Fiyatları</h1>
        <p>
          1997 yılından bu yana binlerce kişiye otel, tur, uçak ve organizasyon
          hizmetleri sunan markamız, her geçen gün daha da büyüyerek
          hayalinizdeki tatili uygun fiyatlarla gerçeğe çevirme fırsatı sunuyor.
        </p>
        <Link href="/" passHref><span className="blue115">Devamını Oku</span></Link>
      </div>
      <div>
        <h1>Türkiye’de En Güzel Tatil Yerleri</h1>
        <p>
          Tatilbudur.com ile unutulmaz bir tatil deneyimine hazır mısınız? Hem
          yurt içinde hem de yurt dışında birbirinden farklı konaklama
          seçenekleri ve zengin içerikli turlarıyla bütçenizi sarsmayacak tatil
          fırsatlarını sizlerle buluşturan acentemiz, otel ve tur hizmetleriyle
          kaliteli hizmetin yeni adresi olma yolunda ilerliyor.
        </p>
        <Link href="/" passHref><span className="blue115">Devamını Oku</span></Link>
      </div>
      <div>
        <h1>Dünyanın En Güzel Tatil Yerleri</h1>
        <p>
          1997 yılından bu yana binlerce kişiye otel, tur, uçak ve organizasyon
          hizmetleri sunan markamız, her geçen gün daha da büyüyerek
          hayalinizdeki tatili uygun fiyatlarla gerçeğe çevirme fırsatı sunuyor.
        </p>
        <Link href="/" passHref><span className="blue115">Devamını Oku</span></Link>
      </div>
    </div>
  );
};

export default SupporterTag;
