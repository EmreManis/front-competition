import OtelItems from "./OtelItems";

import classes from "./otelSection.module.css";

const OtelSection = () => {
  return (
    <section className="flex flex-col items-center mt-10">
      <div className={`w-1360 borderRadius26 ${classes.otelSection}`}>
        <div className="mt-5 mb-2.5">
          <div className="mb-2.5">
            <h1 className="poppins24">Kararsız mı Kaldınız?</h1>
          </div>
          <div className="flex">
              <h1 className="poppinsRegular">Nasıl bir Tatil istediğinize karar veremediyseniz size önerdiğimiz tatil temalarını inceleyin!</h1>
          </div>
        </div>
        <OtelItems />
      </div>
    </section>
  );
};

export default OtelSection;
