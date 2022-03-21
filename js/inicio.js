let a = document.getElementById(`navProducto`)

a.addEventListener(`click`, (e) =>{
    e.preventDefault()
    Swal.fire({
        title: 'Estás list@ para ver las mejores medias de la galaxia??',
        text: "No volverás a ser el mismo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3c3044',
        cancelButtonColor: `#000000`,
        confirmButtonText: 'SIII💣!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            window.location.replace('http://127.0.0.1:5500/pages/productos.html')
          )
        }
      })
})