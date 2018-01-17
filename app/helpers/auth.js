export default function Auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Ross Dowthwaite',
        uid: 'rossdowthwaite',
      })
    }, 2000)
  })
}
