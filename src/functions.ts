export const scrollTo2 = (id: string, options: boolean | ScrollIntoViewOptions) => {
    document.querySelector(id)?.scrollIntoView(options)
}