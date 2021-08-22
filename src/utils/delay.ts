export const delay = (delay: number): Promise<void> => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, delay)
  })
}
