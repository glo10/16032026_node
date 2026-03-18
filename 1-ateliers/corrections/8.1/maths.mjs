export const sum = (...args) => {
  let sum = 0
  args.forEach(nb => sum += nb)
  return sum
}