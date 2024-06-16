const toPages = <T>(list: T[]) =>
  list.reduce<T[][]>((pages, post, index) => {
    const page = Math.floor(index / 4)

    if (!pages[page]) pages[page] = []
    pages[page].push(post)

    return pages
  }, [])

export { toPages }
