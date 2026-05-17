import { groq } from "next-sanity";

// ─── Landing Page ────────────────────────────────────────────────────────────

/** Hero slider images (singleton) */
export const heroSettingsQuery = groq`
  *[_type == "heroSettings"][0]{
    images[]{
      asset->{_id, url},
      hotspot
    }
  }
`;

/** Program Pendidikan — tabs (MTs / MA / Mulazamah) */
export const programPendidikanQuery = groq`
  *[_type == "programPendidikan"] | order(_createdAt asc) {
    _id,
    shortName,
    fullName,
    label,
    description
  }
`;

/** Program Unggulan — list items */
export const programUnggulanQuery = groq`
  *[_type == "programUnggulan"] | order(_createdAt asc) {
    _id,
    name
  }
`;

/** Program Unggulan Image (singleton) */
export const programUnggulanImageQuery = groq`
  *[_type == "programUnggulanImage"][0]{
    image{
      asset->{_id, url},
      hotspot
    }
  }
`;

/** Fasilitas — gallery tabs */
export const fasilitasQuery = groq`
  *[_type == "fasilitas"] | order(_createdAt asc) {
    _id,
    name,
    label,
    image{
      asset->{_id, url},
      hotspot
    }
  }
`;

/** Ekstrakurikuler — chip list */
export const ekstrakurikulerQuery = groq`
  *[_type == "ekstrakurikuler"] | order(_createdAt asc) {
    _id,
    name
  }
`;

/** Ekstrakurikuler Image (singleton) */
export const ekskulImageQuery = groq`
  *[_type == "ekskulImage"][0]{
    image{
      asset->{_id, url},
      hotspot
    }
  }
`;

/** Pengayaan Materi — enrichment list */
export const pengayaanMateriQuery = groq`
  *[_type == "pengayaanMateri"] | order(_createdAt asc) {
    _id,
    name,
    description
  }
`;

/** Berita & Kegiatan — latest 3 posts */
export const beritaKegiatanQuery = groq`
  *[_type == "beritaKegiatan"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    type,
    publishedAt,
    mainImage{
      asset->{_id, url},
      hotspot
    },
    "excerpt": array::join(string::split(pt::text(body), "")[0..150], "") + "..."
  }
`;

/** Contact Person — footer */
export const contactPersonQuery = groq`
  *[_type == "contactPerson"] | order(_createdAt asc) {
    _id,
    name,
    whatsapp
  }
`;

// ─── Pendaftaran Page ────────────────────────────────────────────────────────

/** Pendaftaran Info (singleton) */
export const pendaftaranInfoQuery = groq`
  *[_type == "pendaftaranInfo"][0]{
    tahunAjaran,
    registrationLink,
    jadwalPendaftaran[]{
      gelombang,
      tanggalMulai,
      tanggalBerakhir,
      metodePendaftaran,
      tanggalTesSeleksi,
      tanggalPengumuman
    },
    jadwalDaftarUlang[]{
      gelombang,
      tanggalMulai,
      tanggalBerakhir
    },
    waktuMasuk,
    syaratPendaftaran
  }
`;
