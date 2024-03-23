interface Profile {
  contacts: Contact[]
  activities: Activity[]
  certifications: Certification[]
}

interface Contact {
  id: number
  name: string
  link: string
}

interface Activity {
  id: number
  name: string
}

interface Certification {
  id: number
  name: string
}

export type { Profile, Contact, Certification, Activity }
