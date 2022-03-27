self.addEventListener('install', function(event){
  console.log('sw1: instalado!', event)
})

self.addEventListener('activate', function(evente){
  console.log('sw: ativado!', event)
})