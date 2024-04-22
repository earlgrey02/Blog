import { Activity, Certification, Contact, Profile } from '@/modules/profile/profile'

const contacts: Contact[] = [
  {
    id: 1,
    name: 'GitHub',
    link: 'https://github.com/earlgrey02'
  },
  {
    id: 2,
    name: 'Blog',
    link: 'https://www.earlgrey02.com'
  }
]

const activities: Activity[] = [
  {
    id: 1,
    name: 'SW 마에스트로 14기'
  },
  {
    id: 2,
    name: '삼육대학교 멋쟁이 사자처럼 9, 10기'
  }
]

const certifications: Certification[] = [
  {
    id: 1,
    name: 'CKA(Certified Kubernetes Administrator)'
  }
]

const getProfile = (): Profile => ({
  contacts: contacts,
  activities: activities,
  certifications: certifications
})

export { getProfile }
