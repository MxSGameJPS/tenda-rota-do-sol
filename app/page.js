"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const site = {
  "brandName": "Tenda Rota do Sol",
  "audience": "Viajantes na RS-486, moradores de Itati e da região das Hortênsias e famílias que buscam parada de estrada com produtos coloniais e comida caseira",
  "pageJob": "Fazer quem passa pela Rota do Sol reconhecer a Tenda como parada obrigatória, mostrar o que se encontra ali e converter em ligação ou visita presencial",
  "eyebrow": "Rodovia RS-486 · Itati · Rio Grande do Sul",
  "heroTitle": "A parada onde a estrada vira comida de colônia",
  "heroText": "Entre a serra e o mar, a Tenda Rota do Sol serve o lanche quente e os produtos coloniais que fazem o viajante desacelerar. Aberta todos os dias, das sete da manhã às nove da noite.",
  "primaryCta": "Ligar para a Tenda",
  "secondaryCta": "Ver como chegar",
  "aboutTitle": "Feito para quem passa e para quem fica",
  "aboutText": "Na beira da RS-486, em Itati, a Tenda Rota do Sol é ponto de parada de quem sobe ou desce a serra. Lanchonete e loja de produtos coloniais no mesmo lugar, funciona todos os dias, das 07h às 21h, com a nota de 4,7 construída ao longo de 270 avaliações de quem já parou por aqui.",
  "servicesTitle": "O que você encontra na parada",
  "servicesIntro": "Comida quente para repor a energia da viagem e o melhor da produção colonial da região para levar na bagagem.",
  "services": [
    {
      "title": "Lanches e refeições",
      "description": "Lanchonete aberta das 07h às 21h, todos os dias, para o café da manhã, a parada rápida ou a refeição no meio do caminho."
    },
    {
      "title": "Produtos coloniais",
      "description": "A tradição da colônia à mão de quem passa pela rodovia, para consumir na hora ou levar como lembrança da estrada."
    },
    {
      "title": "Parada de estrada",
      "description": "Localização direta na RS-486, em Itati, num ponto pensado para quem viaja entre a serra e o litoral do Rio Grande do Sul."
    }
  ],
  "proofTitle": "270 paradas que viraram avaliação",
  "proofText": "Nota 4,7 em 270 avaliações. Quem para uma vez na Rota do Sol costuma voltar sempre que a viagem passa por Itati.",
  "contactTitle": "Encontre a Tenda na RS-486",
  "contactText": "Rodovia RS-486, Itati - RS, 95538-000. Aberta todos os dias, das 07h às 21h. Ligue para (51) 99680-3570 e programe a sua parada.",
  "seoTitle": "Tenda Rota do Sol | Lanchonete e Produtos Coloniais em Itati - RS",
  "seoDescription": "Parada na RS-486 em Itati com lanches, refeições e produtos coloniais. Aberta todos os dias das 07h às 21h. Nota 4,7 em 270 avaliações. (51) 99680-3570.",
  "design": {
    "direction": "editorial",
    "heroLayout": "asymmetric",
    "fontPair": "humanist",
    "motion": "standard",
    "radius": "sharp",
    "signatureLabel": "Prévia desenvolvida por Saulo Pavanello",
    "colors": {
      "primary": "#7A3B1E",
      "accent": "#E0932B",
      "background": "#F5EEE1",
      "surface": "#EDE2CE",
      "text": "#2A1C12",
      "muted": "#6B5A48"
    }
  },
  "segment": "Lanchonete",
  "city": "Itati",
  "address": "rodovia RS 486, Itati - RS, 95538-000",
  "phone": "(51) 99680-3570",
  "whatsapp": "5551996803570",
  "rating": "4,7",
  "reviews": "270",
  "mapsLink": "https://maps.google.com/?cid=9061649424425353989&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  "existingWebsite": "",
  "hours": [
    "segunda-feira: 07:00 – 21:00",
    "terça-feira: 07:00 – 21:00",
    "quarta-feira: 07:00 – 21:00",
    "quinta-feira: 07:00 – 21:00",
    "sexta-feira: 07:00 – 21:00",
    "sábado: 07:00 – 21:00",
    "domingo: 07:00 – 21:00"
  ],
  "images": [
    "/images/google-place-1.jpg",
    "/images/google-place-2.jpg",
    "/images/google-place-3.jpg",
    "/images/google-place-4.jpg",
    "/images/google-place-5.jpg",
    "/images/reference-1.jpg"
  ],
  "attributions": [
    {
      "name": "rufinofc",
      "uri": "https://maps.google.com/maps/contrib/115159133272196110095"
    },
    {
      "name": "Smailei Pretto Bazi",
      "uri": "https://maps.google.com/maps/contrib/117305346674631957410"
    },
    {
      "name": "Eliane Maria Oliveira",
      "uri": "https://maps.google.com/maps/contrib/104824770556420494004"
    }
  ],
  "effects": [
    "entrance-motion",
    "section-reveal",
    "hover-lift",
    "parallax-hero",
    "glass-header",
    "ambient-glow",
    "smooth-scroll",
    "cta-pulse"
  ]
};

function Icon({ name }) {
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92Z"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    spark: <><path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] || paths.check}</svg>;
}

function ActionLink({ href, children, className = "", icon = "arrow" }) {
  if (!href) return null;
  const external = href.startsWith("http");
  return <a className={className} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}><span>{children}</span><Icon name={icon}/></a>;
}

export default function Home() {
  const rootRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const phoneHref = site.phone ? "tel:" + site.phone.replace(/[^+\d]/g, "") : "";
  const whatsappHref = site.whatsapp ? "https://wa.me/" + site.whatsapp : "";
  const primaryHref = whatsappHref || phoneHref || site.mapsLink || "#contato";
  const motionDistance = site.design.motion === "expressive" ? 40 : site.design.motion === "subtle" ? 14 : 26;
  const effects = new Set(Array.isArray(site.effects) ? site.effects : []);
  const hasEffect = name => effects.has(name);
  const effectKey = Array.from(effects).sort().join(" ");

  useEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = hasEffect("smooth-scroll") ? "smooth" : "";
    if (reducedMotion || !rootRef.current || (!hasEffect("section-reveal") && !hasEffect("parallax-hero"))) {
      return () => { document.documentElement.style.scrollBehavior = previousScrollBehavior; };
    }
    let context;
    let active = true;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([gsapModule, triggerModule]) => {
      if (!active || !rootRef.current) return;
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        if (hasEffect("section-reveal")) {
          gsap.utils.toArray("[data-reveal]").forEach(element => {
            gsap.fromTo(element, { y: motionDistance, opacity: 0 }, { y: 0, opacity: 1, duration: site.design.motion === "subtle" ? 0.55 : 0.85, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 84%", once: true } });
          });
        }
        if (hasEffect("parallax-hero")) {
          gsap.utils.toArray("[data-parallax]").forEach(element => {
            gsap.to(element, { yPercent: -8, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 0.8 } });
          });
        }
      }, rootRef);
    });
    return () => {
      active = false;
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
      if (context) context.revert();
    };
  }, [reducedMotion, motionDistance, effectKey]);

  const heroInitial = reducedMotion || !hasEffect("entrance-motion") ? false : { opacity: 0, y: motionDistance };
  const heroTransition = { duration: site.design.motion === "subtle" ? 0.45 : 0.8, ease: [0.22, 1, 0.36, 1] };

  return <main ref={rootRef} data-direction={site.design.direction} data-layout={site.design.heroLayout} data-radius={site.design.radius} data-motion={site.design.motion} data-effects={effectKey}>
    <header className="siteHeader"><a className="brand" href="#top" aria-label={"Ir ao início de " + site.brandName}>{site.brandName}</a><nav aria-label="Navegação principal"><a href="#sobre">Sobre</a><a href="#servicos">Diferenciais</a><a href="#contato">Contato</a></nav><ActionLink href={primaryHref} className="headerCta">{site.primaryCta}</ActionLink></header>

    <section className="hero" id="top"><div className="heroAtmosphere" aria-hidden="true"/>
      <motion.div className="heroCopy" initial={heroInitial} animate={{ opacity: 1, y: 0 }} transition={heroTransition}><span className="eyebrow"><Icon name="spark"/>{site.eyebrow}</span><h1>{site.heroTitle}</h1><p>{site.heroText}</p><div className="heroActions"><ActionLink href={primaryHref} className="primary">{site.primaryCta}</ActionLink>{site.mapsLink && <ActionLink href={site.mapsLink} className="secondary" icon="pin">{site.secondaryCta}</ActionLink>}</div><div className="trustLine" aria-label="Informações de confiança">{site.rating && <div><strong>{site.rating}</strong><span>avaliação no Google</span></div>}{site.reviews && <div><strong>{site.reviews}</strong><span>avaliações registradas</span></div>}{site.city && <div><strong>{site.city}</strong><span>atendimento local</span></div>}</div></motion.div>
      <motion.div className="heroVisual" initial={reducedMotion || !hasEffect("entrance-motion") ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ ...heroTransition, delay: 0.14 }}><div className="signatureRail"><span>{site.design.signatureLabel}</span></div><div className="heroImage" data-parallax>{site.images[0] ? <img src={site.images[0]} alt={"Ambiente ou apresentação de " + site.brandName}/> : <div className="mediaFallback"><span>{site.brandName.slice(0, 1)}</span><small>{site.segment || "Negócio local"}</small></div>}</div><div className="heroNote"><span>Prévia estratégica</span><strong>{site.pageJob}</strong></div>{site.images[1] && <div className="heroImageSecondary"><img src={site.images[1]} alt={"Detalhe de " + site.brandName}/></div>}</motion.div>
    </section>

    <section className="statement" id="sobre" data-reveal><div><span className="sectionLabel">Direção</span><h2>{site.aboutTitle}</h2></div><div className="statementBody"><p>{site.aboutText}</p><span className="audience">Criado para: {site.audience}</span></div></section>

    <section className="services" id="servicos"><div className="sectionHead" data-reveal><div><span className="sectionLabel">Experiência</span><h2>{site.servicesTitle}</h2></div><p>{site.servicesIntro}</p></div><div className="serviceComposition">{site.services.map((service, index) => <article className={"serviceCard serviceCard-" + index} key={service.title} data-reveal><span className="serviceMarker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div className="serviceIcon"><Icon name={index === 0 ? "spark" : "check"}/></div><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></section>

    {site.images.length > 2 && <section className="gallery" aria-label={"Galeria de " + site.brandName}>{site.images.slice(2, 5).map((image, index) => <figure key={image} data-reveal><img src={image} alt={"Imagem " + (index + 1) + " de " + site.brandName}/></figure>)}</section>}

    <section className="proof" data-reveal><div className="proofCopy"><span className="sectionLabel">Confiança</span><h2>{site.proofTitle}</h2><p>{site.proofText}</p></div><div className="proofPanel">{site.address && <div><Icon name="pin"/><span><small>Endereço</small><strong>{site.address}</strong></span></div>}{site.hours.length > 0 && <div><Icon name="clock"/><span><small>Horários informados</small><strong>{site.hours.slice(0, 2).join(" · ")}</strong></span></div>}{site.phone && <div><Icon name="phone"/><span><small>Contato</small><strong>{site.phone}</strong></span></div>}</div></section>

    <section className="contact" id="contato" data-reveal><div><span className="sectionLabel">Próximo passo</span><h2>{site.contactTitle}</h2><p>{site.contactText}</p></div><div className="contactActions"><ActionLink href={primaryHref} className="contactPrimary">{site.primaryCta}</ActionLink>{site.mapsLink && <ActionLink href={site.mapsLink} className="contactSecondary" icon="pin">Abrir no Google Maps</ActionLink>}</div></section>

    <footer><div><strong>{site.brandName}</strong><span>{site.segment}{site.city ? " · " + site.city : ""}</span></div><p>Prévia desenvolvida por Saulo Pavanello</p></footer>
    {site.attributions.length > 0 && <div className="attributions">Fotos: {site.attributions.map((item, index) => <span key={item.name}>{index > 0 ? " · " : ""}{item.uri ? <a href={item.uri} target="_blank" rel="noreferrer">{item.name}</a> : item.name}</span>)}</div>}
    {whatsappHref && <motion.a className="floatingWhatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Conversar pelo WhatsApp" whileHover={reducedMotion ? undefined : { y: -3 }} whileTap={reducedMotion ? undefined : { scale: 0.96 }}><Icon name="phone"/><span>WhatsApp</span></motion.a>}
  </main>;
}
