# PRESSUPOST TÈCNIC - PLATAFORMA D'ARTISTES

## 📋 RESUM EXECUTIU

**Projecte:** Plataforma web per a gestió de portfolis d'artistes  
**Client:** [Nom del client]  
**Data:** Desembre 2024  
**Desenvolupador:** Marc Basas  
**Tarifa:** 30€/hora  

### Descripció del Projecte
Desenvolupament d'una plataforma web que serveixi com a "borsa d'artistes" amb tres tipus d'usuaris:

**Visitants:** Accedeixen a la landing page amb grid d'artistes, seleccionen un artista i visualitzen el seu portfolio públic amb informació d'estudis, experiència i carrousel de projectes.

**Artistes:** S'autentiquen des del botó "Artistes", accedeixen al seu dashboard privat per gestionar foto de portada, informació personal, experiència i carrousel de projectes que es mostra públicament.

**Administradors:** Accedeixen via URL oculta a un dashboard per gestionar artistes (eliminar, reordenar, aprovar registres) i moderar contingut.

---

## 🎯 OBJECTIUS I FUNCIONALITATS

### Objectius Principals
- Crear un escaparate digital per a 25-50 artistes amb foto de portada i nom
- Permetre als visitants explorar portfolis individuals amb informació completa
- Proporcionar als artistes un dashboard per gestionar el seu perfil i projectes
- Sistema d'administració per moderar i organitzar els artistes de la plataforma

### Funcionalitats Core

#### Per a Visitants (Usuaris Normals)
1. **Landing Page**: Grid d'artistes amb foto de portada + nom
2. **Portfolis Públics**: Pàgines individuals (/artista/nom) amb:
   - Informació d'estudis i experiència laboral
   - Carrousel de projectes amb imatges/vídeos
   - Dades de contacte
3. **Sistema de Cerca**: Filtres per especialitat, ubicació, experiència

#### Per a Artistes
4. **Sistema d'Autenticació**: Registre i login des de botó "Artistes"
5. **Dashboard Privat**: Zona de gestió personal amb:
   - Overview del perfil i estadístiques
   - Accés a formularis d'edició
   - Preview de com es veu públicament
6. **Gestió de Perfil**: Editar foto portada, nom, bio, experiència
7. **Gestió de Projectes**: CRUD complet per carrousel (afegir, editar, reordenar)
8. **Upload Multimèdia**: Sistema d'imatges i vídeos optimitzat

#### Per a Administradors
9. **Panel d'Administració**: Dashboard amb URL oculta per:
   - Gestió d'artistes (eliminar, reordenar, aprovar)
   - Moderació de contingut
   - Estadístiques globals

---

## 🏗️ ARQUITECTURA TÈCNICA

### Stack Tecnològic Recomanat

#### Frontend
- **Next.js 14** amb App Router - Framework principal
- **React 19** - Llibreria d'interfície d'usuari
- **TypeScript** - Tipat estàtic per major robustesa
- **Tailwind CSS** - Framework de CSS (adaptable al Figma proporcionat)

#### Backend
- **Next.js API Routes** - Backend integrat
- **Prisma ORM** - Gestió de base de dades
- **NextAuth.js** - Sistema d'autenticació robust

#### Base de Dades
- **PostgreSQL** - Base de dades relacional
- **Supabase** o **Railway** - Hosting de base de dades

#### Storage i CDN
- **Cloudinary** - Gestió d'imatges i vídeos amb optimització automàtica
- **CDN global** inclòs per a millor rendiment

#### Deployment
- **Vercel** - Hosting i deployment automàtic
- **GitHub** - Control de versions i CI/CD

### Estructura de Base de Dades

```sql
-- Taula d'usuaris/artistes
users {
  id: UUID (PK)
  email: String (unique)
  name: String
  slug: String (unique) -- per URLs com /artista/marc-basas
  avatar: String? -- URL de Cloudinary
  bio: Text?
  location: String?
  website: String?
  social_links: JSON -- {instagram, linkedin, behance, etc}
  specialties: String[] -- ["UI/UX", "Frontend", "Il·lustració"]
  status: ENUM (pending, active, suspended)
  created_at: DateTime
  updated_at: DateTime
}

-- Projectes de cada artista (per al carrousel)
projects {
  id: UUID (PK)
  user_id: UUID (FK → users.id)
  title: String
  description: Text
  category: String -- "disseny", "il·lustració", "fotografia", etc.
  featured: Boolean -- per destacar al portfolio públic
  order: Integer -- per ordenar al carrousel
  status: ENUM (draft, published, archived)
  created_at: DateTime
  updated_at: DateTime
}

-- Arxius multimèdia de projectes
project_media {
  id: UUID (PK)
  project_id: UUID (FK → projects.id)
  type: ENUM (image, video, document)
  url: String -- URL de Cloudinary
  public_id: String -- ID de Cloudinary per transformacions
  title: String?
  description: Text?
  order: Integer -- per ordenar a la galeria
  created_at: DateTime
}

-- Experiència laboral/educació
experiences {
  id: UUID (PK)
  user_id: UUID (FK → users.id)
  type: ENUM (work, education, freelance)
  title: String -- "Frontend Developer" o "Grau en Disseny"
  company: String -- "Google" o "Universitat X"
  location: String?
  start_date: Date
  end_date: Date? -- null si és actual
  description: Text?
  created_at: DateTime
}
```

### Comparativa amb el Projecte Actual

#### Diferències Clau
1. **Escala**: D'1 usuari (tu) → 25-50 artistes
2. **Autenticació**: De PIN simple → Sistema multi-usuari
3. **Dades**: D'arxiu estàtic → Base de dades real
4. **Perfils**: De portfolio únic → Múltiples portfolis independents
5. **Gestió**: D'admin únic → Perfils auto-gestionats

#### Components Reutilitzables del Projecte Actual
- **VideoPlayer.jsx** → Perfecte per vídeos al carrousel de projectes
- **Sistema d'estils CSS** → Mantenir el design system per coherència visual
- **Layout.jsx** → Adaptar per navegació entre landing, portfolis i dashboard
- **AdminPage.jsx** → Base per dashboard d'artista i dashboard d'administració
- **Sistema d'upload** → Adaptar per Cloudinary amb múltiples imatges per projecte

---

## ⏱️ PLANIFICACIÓ I PRESSUPOST DETALLAT

### FASE 1: SETUP I ARQUITECTURA BASE
**Durada:** 3 setmanes

| Tasca | Hores | Descripció |
|-------|-------|-------------|
| Setup del projecte | 8h | Next.js 14, TypeScript, configuració inicial |
| Base de dades | 12h | Prisma setup, esquemes, migracions |
| Autenticació | 16h | NextAuth.js, rols, middleware de protecció |
| Configuració deployment | 6h | Vercel, variables d'entorn, CI/CD |
| Cloudinary integration | 8h | Upload d'arxius, transformacions |
| Estructura base de components | 10h | Layout, navegació, components UI base |
| **SUBTOTAL FASE 1** | **60h** | **1.800€** |

### FASE 2: FUNCIONALITATS CORE
**Durada:** 7 setmanes

| Tasca | Hores | Descripció |
|-------|-------|-------------|
| Sistema de registre/login | 20h | Autenticació des de botó "Artistes", validacions, flux complet |
| Dashboard d'artista | 20h | Zona privada: overview, navegació, stats, preview públic |
| Formularis d'edició de perfil | 25h | Editar foto portada, nom, bio, experiència, estudis |
| Gestió de projectes/carrousel | 25h | CRUD projectes, reordenar carrousel, marcar destacats |
| Upload multimèdia | 20h | Sistema Cloudinary, múltiples imatges/vídeos, previews |
| Portfolis públics | 25h | Pàgines individuals (/artista/nom) per visitants |
| **SUBTOTAL FASE 2** | **135h** | **4.050€** |

### FASE 3: LANDING I CERCA
**Durada:** 4 setmanes

| Tasca | Hores | Descripció |
|-------|-------|-------------|
| Landing page | 20h | Grid d'artistes amb foto portada + nom, botó "Artistes" |
| Sistema de cerca | 18h | Cerca per nom, especialitat, ubicació per visitants |
| Filtres avançats | 15h | Per categoria, experiència, disponibilitat, estudis |
| Detall de projectes | 15h | Vista ampliada de projectes dins del portfolio públic |
| SEO i meta tags | 10h | Optimització per cercadors, meta tags dinàmics |
| **SUBTOTAL FASE 3** | **78h** | **2.340€** |

### FASE 4: ADMINISTRACIÓ
**Durada:** 3 setmanes

| Tasca | Hores | Descripció |
|-------|-------|-------------|
| Panel d'administració | 25h | Dashboard amb URL oculta, llista d'artistes ordenable |
| Sistema d'aprovacions | 15h | Aprovar/rebutjar registres, moderar contingut |
| Gestió d'artistes | 12h | Eliminar artistes, reordenar grid, suspendre comptes |
| Analytics i estadístiques | 10h | Stats d'ús, dashboards, informes bàsics |
| **SUBTOTAL FASE 4** | **62h** | **1.860€** |

### FASE 5: POLISH I TESTING
**Durada:** 4 setmanes

| Tasca | Hores | Descripció |
|-------|-------|-------------|
| Responsive design | 20h | Adaptació mòbil/tablet de tot el lloc |
| Performance optimization | 15h | Lazy loading, optimització d'imatges |
| Testing complet | 20h | Testing manual, correcció de bugs |
| Documentació | 8h | Guies d'ús per artistes i admins |
| Deploy i configuració final | 7h | Configuració de producció |
| **SUBTOTAL FASE 5** | **70h** | **2.100€** |

---

## 💰 PRESSUPOST FINAL

### Resum de Desenvolupament
| Fase | Hores | Preu (30€/h) |
|------|-------|---------------|
| Fase 1: Setup i Arquitectura | 60h | 1.800€ |
| Fase 2: Funcionalitats Core | 135h | 4.050€ |
| Fase 3: Landing i Cerca | 78h | 2.340€ |
| Fase 4: Administració | 62h | 1.860€ |
| Fase 5: Polish i Testing | 70h | 2.100€ |
| **SUBTOTAL DESENVOLUPAMENT** | **405h** | **12.150€** |

### Contingències i Extres
| Concepte | Hores | Preu |
|----------|-------|------|
| Buffer de contingència (15%) | 61h | 1.823€ |
| Revisions addicionals | 20h | 600€ |
| Suport post-llançament (1 mes) | 15h | 450€ |
| **SUBTOTAL EXTRES** | **96h** | **2.873€** |

### 🎯 PREU TOTAL
```
DESENVOLUPAMENT: 405h × 30€ = 12.150€
CONTINGÈNCIES: 96h × 30€ = 2.873€
TOTAL: 501h = 15.023€
```

---

## 📅 CRONOGRAMA D'ENTREGA

### Timeline Realista (mitja jornada)
- **Fase 1**: 3 setmanes (20h/setmana)
- **Fase 2**: 7 setmanes (20h/setmana) 
- **Fase 3**: 4 setmanes (20h/setmana)
- **Fase 4**: 3 setmanes (20h/setmana)
- **Fase 5**: 4 setmanes (18h/setmana)

**DURADA TOTAL: ~21 setmanes (5 mesos)**

### Timeline Agressiu (jornada completa)
**DURADA TOTAL: ~12-14 setmanes (3-3.5 mesos)**

---

## ⚠️ RISCOS I CONSIDERACIONS

### Factors que poden augmentar el pressupost
- **Canvis en el disseny Figma** durant el desenvolupament (+10-20h)
- **Integracions addicionals** no contemplades (+15-30h)
- **Funcionalitats extra** que sorgeixin durant el desenvolupament
- **Complexitat del sistema de permisos** si necessiten rols molt específics
- **Migracions de dades** si tenen artistes existents

### Factors que poden reduir-lo
- **Reutilització del VideoPlayer** i altres components (-10-15h)
- **Disseny simple** sense animacions complexes (-15-20h)
- **Menys iteracions** en el feedback (-10-15h)

---

## 💡 OPCIONS DE PRESSUPOST

### OPCIÓ A: PROJECTE COMPLET
```
💰 15.000€ (501 hores)
⏱️ 5 mesos (mitja jornada) o 3.5 mesos (jornada completa)
✅ Totes les funcionalitats incloses
✅ 1 mes de suport post-llançament
```

### OPCIÓ B: MVP REDUÏT
```
💰 10.000€ (333 hores)
⏱️ 3 mesos (mitja jornada)
✅ Funcionalitats core (Fases 1, 2 i part de 3)
❌ Sense panel d'administració avançat
❌ Sense sistema d'aprovacions
```

### OPCIÓ C: DESENVOLUPAMENT PER FASES
```
💰 3.000€ per fase (pagament escalonat)
⏱️ Lliuraments cada 3-4 setmanes
✅ Menor risc per al client
✅ Feedback continu
```

---

## 💸 COSTOS ADDICIONALS

### Hosting i Serveis (mensuals)
- **Vercel Pro**: 20€/mes (necessari per connexions DB)
- **Supabase**: 25€/mes (2GB DB + 8GB bandwidth)
- **Cloudinary**: 0-89€/mes (depenent de l'ús d'imatges)
- **Total**: ~45-134€/mes

### Alternativa Més Econòmica
- **Railway**: 5€/mes (DB + hosting)
- **Cloudinary Free**: 0€/mes (25GB)
- **Total**: ~5€/mes

### Altres Costos
- **Domini**: ~15€/any
- **SSL i CDN**: Inclòs a Vercel

---

## 🎯 RECOMANACIÓ FINAL

### Per a aquest projecte específic (25-50 artistes), recomano:

1. **Proposar l'Opció C** (per fases) - menor risc
2. **Començar amb un MVP** de les primeres 2 fases
3. **Incloure 2-3 revisions** per fase en el preu
4. **Demanar 30% d'avançament** abans de començar
5. **Documentar molt bé l'abast** per evitar scope creep

### Condicions de Pagament Recomanades
- **30% a l'inici** del projecte
- **40% a la meitat** (final Fase 2)
- **30% al lliurament** final

### Garanties Incloses
- **1 mes de suport** post-llançament inclòs
- **Correcció de bugs** durant els primers 30 dies
- **Documentació completa** d'ús i manteniment
- **Codi font** i drets de propietat intel·lectual al client

---

## 📞 CONTACTE

**Marc Basas**  
Desenvolupador Full-Stack  
Email: [el teu email]  
Telèfon: [el teu telèfon]  
Portfolio: https://marcbasas.com

---

*Aquest pressupost és vàlid durant 30 dies a partir de la data d'emissió. Els preus inclouen IVA quan sigui aplicable.*

**Data d'emissió:** Desembre 2024  
**Versió:** 1.0

