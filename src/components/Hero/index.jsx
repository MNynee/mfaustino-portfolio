import Button from "../Button";
import ProfileDetail from "../ProfileDetails";

const Hero = () => {
  return (
    <section className="relative flex flex-col text-center gap-12 xl:gap-16 px-3 lg:px-18 py-11 lg:py-29.5">
      <div className="absolute inset-0 z-0 bg-[url(src/assets/hero-bg-mobile.webp)] xl:bg-[url(src/assets/hero-bg.webp)] bg-cover bg-no-repeat bg-center opacity-25"></div>
      <div className="relative flex flex-col items-center gap-6 xl:gap-8">
        <p className="text-[12px] lg:text-[14px] font-semibold text-highlight">DÉVELOPPEUR WEB</p>
        <h1 className="text-main-title font-light text-[30px] lg:text-[108px] leading-[1.02] lg:leading-[0.98] font-fraunces w-87/100 xl:w-7/10">
          Des interfaces pensées avec <span className="italic">soin</span>.
        </h1>
        <p className="text-secondary-text text-[13px] lg:text-[20px] w-87/100 xl:w-34/100">
          Développeur specialisé au front-end, je conçois des sites clairs,
          accessibles et agréables à utiliser.
        </p>
        <div className="flex flex-col gap-3 lg:flex-row xl:gap-12">
          <Button
            variant="primary"
            content="Découvrir mes projets"
            link="#projects"
          />
          <Button
            variant="secondary"
            content="Me contacter"
            link="#contact"
          />
        </div>
      </div>
      <ul className="relative flex flex-col md:flex-row md:justify-between  md:text-center items-center gap-6">
        <ProfileDetail title="LOCALISATION" text="Royan, France" />
        <ProfileDetail title="FORMATION" text="Intégrateur Web" />
        <ProfileDetail title="DISPONIBILITÉ" text="Immédiate" />
      </ul>
    </section>
  );
};

export default Hero;
