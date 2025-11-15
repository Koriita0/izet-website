"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Clock,
  GraduationCap,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

type CarouselSectionProps = {
  title: string;
  images: string[];
  basePath: string;
  altPrefix: string;
};

function CarouselSection({
  title,
  images,
  basePath,
  altPrefix,
}: CarouselSectionProps) {
  const [startIndex, setStartIndex] = useState(0);

  if (!images.length) return null;

  const visibleImages = [0, 1, 2].map(
    offset => images[(startIndex + offset) % images.length],
  );

  const prev = () =>
    setStartIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  const next = () =>
    setStartIndex(prevIndex => (prevIndex + 1) % images.length);

  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold text-[#a04460]">{title}</h3>

      <div className="relative">
        {/* Flecha izquierda */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={prev}
          className="absolute left-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-gray-300 bg-white/80 text-gray-700 shadow-md backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Imágenes visibles (3) */}
        <div className="mx-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {visibleImages.map(foto => (
            <div
              key={foto}
              className="group relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-[color:var(--muted)] shadow-sm"
            >
              <Image
                src={`${basePath}/${foto}.jpg`}
                alt={`${altPrefix} - ${foto}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Flecha derecha */}
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={next}
          className="absolute right-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-gray-300 bg-white/80 text-gray-700 shadow-md backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

export default function BellezaIntegralPage() {
  const espacioTrabajoFotos = [
    "IMG-20251021-WA0049",
    "IMG-20251021-WA0056",
    "IMG-20251021-WA0047",
  ];
  const bellezaFotos = [
    "IMG-20251021-WA0115",
    "IMG-20251021-WA0128",
    "IMG-20251021-WA0130",
    "IMG-20251021-WA0132",
    "IMG-20251021-WA0117",
  ];
  const unasFotos = [
    "IMG-20251021-WA0075",
    "IMG-20251107-WA0019",
    "IMG-20251107-WA0015",
    "IMG-20251107-WA0014",
    "IMG-20251107-WA0016",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Barra superior */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold text-gray-900">IZET</h1>
                <p className="text-xs text-gray-600">
                  Instituto Zacatecano de Estudios Técnicos
                </p>
              </div>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-red-600 bg-transparent text-red-600"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO con fondo rosa claro */}
      <section className="bg-[#fbe7ee] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Carrera Técnica en{" "}
              <span className="text-[color:var(--primary)]">
                Belleza Integral
              </span>
            </h1>
            <p className="mb-4 text-lg font-semibold text-[color:var(--primary)]">
              RVOE: 01432CTBI240125
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Conviértete en un profesional de la belleza con formación
              completa en estilismo, maquillaje, cuidado de la piel y
              tratamientos corporales.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            {/* OBJETIVO */}
            <div className="mb-16 grid items-start gap-10 lg:grid-cols-[1.5fr,1fr]">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Objetivo de la carrera
                </h2>
                <p className="mb-4 leading-relaxed text-gray-700">
                  La carrera técnica en belleza integral ofrece formación en una
                  amplia variedad de habilidades relacionadas con la estética y
                  el cuidado personal. Se estudian estilismo, maquillaje,
                  cuidado de la piel, manicura y pedicura, así como técnicas de
                  masaje y tratamientos corporales.
                </p>
                <p className="leading-relaxed text-gray-700">
                  El estudiantado también aprende sobre higiene, seguridad y
                  prácticas comerciales en la industria de la belleza, además de
                  bases de gestión empresarial para quienes desean abrir su
                  propio salón de belleza o spa. Las y los egresados pueden
                  trabajar en salones de belleza, spas, cruceros, hoteles o de
                  manera independiente.
                </p>
              </div>

              <Card className="border-none bg-[#f4d7d7] shadow-md">
                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      ¿Por qué estudiar Belleza Integral en IZET?
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-red-700" />
                        <span>
                          Formación integral en cabello, piel, uñas y
                          tratamientos corporales.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-red-700" />
                        <span>
                          Enfoque práctico con talleres y espacios equipados.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-4 w-4 text-red-700" />
                        <span>
                          Bases de emprendimiento para impulsar tu propio
                          negocio de belleza.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <p className="mt-4 text-xs text-red-900">
                    Duración total: <strong>2 años / 4 semestres</strong>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* PERFILES */}
            <section className="mb-16">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                Perfiles de la carrera
              </h2>
              <div className="mb-8 grid gap-6 md:grid-cols-2">
                {/* Ingreso */}
                <Card className="border-red-100 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Perfil de ingreso
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Interés por la estética, el maquillaje y el cuidado
                          personal.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Habilidad manual y creatividad para el diseño de
                          imagen.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Actitud de servicio, empatía y gusto por el trato con
                          personas.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Disposición para seguir normas de higiene y
                          seguridad.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Egreso */}
                <Card className="border-red-100 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900">
                      Perfil de egreso
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Realiza servicios de corte, color, peinado,
                          maquillaje y uñas con calidad profesional.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Aplica protocolos de higiene, bioseguridad y atención
                          al cliente.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Propone cambios de imagen acordes a las necesidades de
                          cada persona.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <span>
                          Cuenta con bases para incorporarse al sector laboral o
                          iniciar su propio negocio.
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-dashed border-red-200 bg-white/70">
                <CardContent className="p-6 text-center">
                  <p className="text-gray-700">
                    La combinación de técnica, creatividad y atención
                    personalizada te permitirá destacar en el mundo profesional
                    de la belleza.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* PLAN DE ESTUDIOS (solo imagen horizontal) */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Plan de estudios
              </h2>
              <div className="rounded-lg border-2 border-[color:var(--primary)] bg-white p-4">
                <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-[color:var(--muted)]">
                  <Image
                    src="/seleccionIZET/Belleza/plan de estudios.png"
                    alt="Plan de estudios de la carrera técnica en Belleza Integral"
                    fill
                    className="object-contain md:object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* MODALIDADES + DURACIÓN Y VALIDEZ */}
            <section className="mb-16">
              <div className="mb-10 text-center">
                <h2 className="mb-2 text-3xl font-bold text-gray-900">
                  Modalidades de estudio
                </h2>
                <p className="text-gray-600">
                  Elige el esquema que mejor se adapte a tu ritmo y actividades.
                </p>
              </div>

              <div className="mb-10 grid gap-8 md:grid-cols-2">
                <Card className="border-none bg-[#e3e0e3] shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 inline-block rounded-full bg-[#d5aeb4] px-6 py-1 text-sm font-semibold text-white">
                      SEMIESCOLARIZADO
                    </div>
                    <p className="mb-1 text-gray-800">
                      Estudia solo los sábados.
                    </p>
                    <p className="text-gray-800">
                      La carrera tiene una duración de 2 años.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-none bg-[#e3e0e3] shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 inline-block rounded-full bg-[#d5aeb4] px-6 py-1 text-sm font-semibold text-white">
                      ESCOLARIZADO
                    </div>
                    <p className="mb-1 text-gray-800">
                      Estudia entre semana.
                    </p>
                    <p className="text-gray-800">
                      La carrera tiene una duración de 2 años.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <Card className="border-2 border-red-100">
                  <CardContent className="p-6 text-center">
                    <Clock className="mx-auto mb-3 h-10 w-10 text-red-600" />
                    <h3 className="mb-1 font-bold text-gray-900">Duración</h3>
                    <p className="text-gray-700">
                      2 años
                      <span className="block text-sm">(4 semestres)</span>
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-red-100">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="mx-auto mb-3 h-10 w-10 text-red-600" />
                    <h3 className="mb-1 font-bold text-gray-900">
                      Modalidades
                    </h3>
                    <p className="text-gray-700">
                      Escolarizado y semiescolarizado.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 border-red-100">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="mx-auto mb-3 h-10 w-10 text-red-600" />
                    <h3 className="mb-1 font-bold text-gray-900">
                      Validez oficial
                    </h3>
                    <p className="text-gray-700">
                      RVOE: 01432CTBI240125
                      <span className="block text-sm">Reconocida por la SEP.</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CAMPO LABORAL */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Campo laboral
              </h2>
              <div className="rounded-2xl bg-gray-50 p-8 shadow-md">
                <p className="mb-6 text-gray-700">
                  Como egresada o egresado de Belleza Integral podrás
                  desempeñarte en distintos espacios dedicados al cuidado de la
                  imagen y el bienestar:
                </p>
                <ul className="grid gap-3 md:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">Salones de belleza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">
                      Spas y centros de estética.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">Hoteles y resorts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">Cruceros.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">
                      Trabajo independiente a domicilio o por cita.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <span className="text-gray-700">
                      Emprendimiento de tu propio salón o spa.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* GALERÍA CON CARRUSEL */}
            <div className="mb-16">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Galería
              </h2>
              <div className="space-y-10">
                <CarouselSection
                  title="Espacio de trabajo"
                  images={espacioTrabajoFotos}
                  basePath="/seleccionIZET/Belleza"
                  altPrefix="Espacio de trabajo Belleza Integral"
                />
                <CarouselSection
                  title="Maquillaje y estilismo"
                  images={bellezaFotos}
                  basePath="/seleccionIZET/Belleza"
                  altPrefix="Belleza Integral"
                />
                <CarouselSection
                  title="Uñas"
                  images={unasFotos}
                  basePath="/seleccionIZET/UnasBelleza"
                  altPrefix="Uñas Belleza Integral"
                />
              </div>
            </div>

            {/* CTA FINAL */}
            <div className="pb-8">
              <div className="rounded-3xl bg-[color:var(--primary)] p-8 text-center text-white shadow-lg">
                <h3 className="mb-4 text-2xl font-bold">
                  ¿Listo para comenzar tu carrera en Belleza Integral?
                </h3>
                <p className="mb-6">
                  Contáctanos para conocer horarios, promociones y proceso de
                  inscripción.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/#contacto">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="bg-white text-[color:var(--primary)] hover:bg-gray-100"
                    >
                      Contactar ahora
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white bg-transparent text-white hover:bg-white/10"
                    >
                      Ver otras carreras
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
