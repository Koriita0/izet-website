import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, GraduationCap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function BarberoProfesionalPage() {
  const fotosGaleria = [
    "IMG-20251021-WA0054",
    "IMG-20251021-WA0055",
    "IMG-20251021-WA0074",
    "IMG-20251021-WA0082",
    "IMG-20251107-WA0067",
  ]

  const planEstudios = [
    {
      titulo: "Primer semestre",
      materias: ["Introducción a la barbería", "Seguridad e higiene", "Limpieza facial"],
    },
    {
      titulo: "Segundo semestre",
      materias: ["Relaciones humanas", "Depilación", "Barbería"],
    },
    {
      titulo: "Tercer semestre",
      materias: ["Emprendedurismo", "Permacología", "Colorimetría"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO */}
            {/* HERO */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src="/seleccionIZET/BarberoProfesional/hero.jpg" // ← cambia esta ruta si tu imagen se llama diferente
          alt="Barbería profesional IZET"
          fill
          className="object-cover"
          priority
        />
        {/* Capa oscura encima de la imagen */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Contenido */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight drop-shadow-md">
              Carrera Técnica en{" "}
              <span className="text-red-400">Barbería Profesional</span>
            </h1>
            <p className="text-lg text-red-300 font-semibold mb-4 drop-shadow">
              RVOE: 00532CTBP240125
            </p>
            <p className="text-lg text-gray-100 leading-relaxed drop-shadow">
              Domina las técnicas modernas de barbería y estilismo masculino
              con una formación práctica, actualizada y orientada al
              emprendimiento.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* OBJETIVO */}
          <div className="grid gap-10 lg:grid-cols-[1.4fr,1fr] mb-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Objetivo de la carrera
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La carrera técnica en barbería profesional proporciona a los
                estudiantes las habilidades y conocimientos necesarios para
                convertirse en barberos altamente capacitados. A lo largo de la
                formación se aborda una variedad de técnicas de corte de cabello,
                peinado, afeitado, cuidado de la barba y tratamiento del cuero
                cabelludo.
              </p>
              <p className="text-gray-700 leading-relaxed">
                El alumnado aprende sobre herramientas y productos de barbería,
                técnicas de atención al cliente, normas de higiene y seguridad
                en el salón, así como tendencias actuales en moda masculina y
                aspectos básicos de gestión empresarial para quienes desean
                abrir su propio negocio.
              </p>
            </div>

            <Card className="bg-[#f1d3d3] border-none shadow-md">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    ¿Por qué estudiar barbería en IZET?
                  </h3>
                  <ul className="space-y-2 text-gray-800 text-sm">
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                      <span>Grupos reducidos para atención personalizada.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                      <span>Prácticas constantes en ambiente real de salón.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-4 h-4 text-red-700 mt-0.5" />
                      <span>Formación con enfoque en servicio y emprendimiento.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-red-900 mt-4">
                  Duración total: <strong>1 año 6 meses / 3 semestres</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* PERFILES */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Perfiles de la carrera
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Perfil de ingreso */}
              <Card className="border-red-100 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Perfil de ingreso
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>Interés por la imagen y el cuidado personal.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Creatividad y gusto por el trabajo manual y detallista.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Habilidad para el trato con personas y atención al
                        cliente.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Disposición para aprender normas de higiene y seguridad.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Perfil de egreso */}
              <Card className="border-red-100 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Perfil de egreso
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Domina técnicas de corte, afeitado y diseño de barba
                        clásicas y actuales.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Aplica normas de higiene, seguridad y bioseguridad en el
                        salón de barbería.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Brinda atención profesional y personalizada a sus
                        clientes.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-red-600 mt-0.5" />
                      <span>
                        Cuenta con bases para administrar o emprender su propia
                        barbería.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-dashed border-red-200 bg-white/70">
              <CardContent className="p-6 text-center">
                <p className="text-gray-700">
                  La combinación de técnica, creatividad y trato humano te
                  permitirá destacar en un sector en constante crecimiento y con
                  alta demanda de barberos profesionales.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* PLAN DE ESTUDIOS */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Plan de estudios
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {planEstudios.map((semestre) => (
                <Card
                  key={semestre.titulo}
                  className="bg-[#f1d3d3] border-none shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform"
                >
                  <CardContent className="p-5">
                    <div className="inline-block px-4 py-1 rounded-full bg-red-700 text-white text-xs font-semibold mb-4">
                      {semestre.titulo.toUpperCase()}
                    </div>
                    <ul className="space-y-2 text-sm text-gray-800">
                      {semestre.materias.map((m) => (
                        <li key={m} className="border-b border-red-200/70 pb-1">
                          {m}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* GALERÍA */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6 gap-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Galería de prácticas y estilos
              </h2>
              <span className="text-xs md:text-sm text-red-700 font-semibold uppercase tracking-wide">
                Vida en el aula y en la barbería
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fotosGaleria.map((foto) => (
                <div
                  key={foto}
                  className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 group shadow-sm"
                >
                  <Image
                    src={`/seleccionIZET/BarberoProfesional/${foto}.jpg`}
                    alt={`Galería Barbería Profesional - ${foto}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </section>

          {/* MODALIDADES + DURACIÓN Y VALIDEZ */}
          <section className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Modalidades de estudio
              </h2>
              <p className="text-gray-600">
                Elige el esquema que mejor se adapte a tu tiempo y necesidades.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Card className="bg-[#f1d3d3] border-none shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="inline-block bg-red-700 text-white px-6 py-1 rounded-full text-sm font-semibold mb-6">
                    SEMIESCOLARIZADO
                  </div>
                  <p className="text-gray-800 mb-1">Estudia solo los sábados.</p>
                  <p className="text-gray-800">
                    La carrera tiene una duración de 1 año 6 meses.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#f1d3d3] border-none shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="inline-block bg-red-700 text-white px-6 py-1 rounded-full text-sm font-semibold mb-6">
                    ESCOLARIZADO
                  </div>
                  <p className="text-gray-800 mb-1">Estudia entre semana.</p>
                  <p className="text-gray-800">
                    La carrera tiene una duración de 1 año 6 meses.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <Clock className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Duración</h3>
                  <p className="text-gray-700">
                    1 año 6 meses
                    <span className="block text-sm">(3 semestres)</span>
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Modalidades</h3>
                  <p className="text-gray-700">
                    Escolarizado y semiescolarizado.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-red-100">
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-10 h-10 text-red-600 mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">Validez oficial</h3>
                  <p className="text-gray-700">
                    RVOE: 00532CTBP240125
                    <span className="block text-sm">Reconocida por la SEP.</span>
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CAMPO LABORAL */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Campo laboral
            </h2>
            <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
              <p className="text-gray-700 mb-6">
                Como egresado de la carrera técnica en Barbería Profesional
                podrás desempeñarte en distintos espacios dedicados a la imagen
                y cuidado masculino:
              </p>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Barberías tradicionales y modernas.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Salones de belleza.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Spas para hombres.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hoteles y resorts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Trabajo independiente como barbero a domicilio.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Emprendimiento de tu propia barbería.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="pb-8">
            <div className="bg-red-700 text-white rounded-3xl p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                ¿Listo para comenzar tu carrera en Barbería Profesional?
              </h3>
              <p className="mb-6">
                Contáctanos para conocer horarios, promociones y proceso de
                inscripción.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contacto">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-red-700 hover:bg-gray-100"
                  >
                    Solicitar información
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-red-800 bg-transparent"
                  >
                    Ver otras carreras
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  )
}
