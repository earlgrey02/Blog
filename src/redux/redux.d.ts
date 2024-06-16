import store from '@/redux/store'

declare global {
  type Store = ReturnType<typeof store.getState>
}
