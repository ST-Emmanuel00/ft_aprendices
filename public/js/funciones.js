const url = 'https://bk-aprendices.onrender.com/api/aprendiz'

const listar_aprendices = async () => {


    let body = document.getElementById('contenido')


    if (body) {

        let mensaje = ''


        fetch(url)
            .then(res => res.json())
            .then(function (data) {

                console.log(data)
                let lista = data.aprendices
                lista.map((aprendiz, item) => {

                    console.log('Si estas dentro')

                    const promedio = ((aprendiz.nota_1 + aprendiz.nota_2 + aprendiz.nota_3) / 3)

                    mensaje += `
                    
                    <tr>
    
                        <td>${item}</td>
                        <td>${aprendiz.documento}</td>
                        <td>${aprendiz.nombre}</td>
                        <td>${aprendiz.nota_1}</td>
                        <td>${aprendiz.nota_2}</td>
                        <td>${aprendiz.nota_3}</td>
                        <td>${promedio.toFixed(2)}</td>

                        <td>


                                <a onclick='editar_aprendiz(${JSON.stringify(aprendiz)})'  type="button" class="dropdown-item" data-toggle="modal" data-target="#eventModal">Editar</a>
                                <a onclick='eliminar_aprendiz("${aprendiz._id}")' class="waves-effect waves-light btn modal-trigger red" href="#">Eliminar</a>

                           

                        </td>
                        

                    </tr>`

                    body.innerHTML = mensaje

                })
            })
    }
}

listar_aprendices()

const actualizar_aprendiz = async () => {

    
    const documento = document.getElementById('documento').value
    const nombre = document.getElementById('nombre').value
    const nota_1 = document.getElementById('nota_1').value
    const nota_2 = document.getElementById('nota_2').value
    const nota_3 = document.getElementById('nota_3').value

    
    let aprendiz = {

        _id: document.getElementById('_id').value,
        documento: documento,
        nombre: nombre,
        nota_1: nota_1,
        nota_2: nota_2,
        nota_3: nota_3,


    }


    console.log(aprendiz)

    const ER_nombre = /^[A-Z0-9\s]+$/;

    try {
        if (documento === '' || nombre === '' || nota_1 === '' || nota_2 === '' || nota_3 === '') {

            throw 'No puede haber campos vacíos';

        } else if (!ER_nombre.test(nombre)) {

            throw 'El nombre del aprendiz no es válido';

        } else if (nota_1 < 0 ||  nota_1 > 5) {

            throw 'Nota debe ser entre 0 y 5';

        } else if (nota_2 < 0 ||  nota_2 > 5) {

            throw 'Nota debe ser entre 0 y 5';

        } else if (nota_3 < 0 ||  nota_3 > 5) {

            throw 'Nota debe ser entre 0 y 5';

        } else {

            fetch(url, {

                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(aprendiz),
                headers: { "Content-type": "application/json; charset=UTF-8" }
        
              })

                .then(response => response.json())
                .then(json => {
                    Swal.fire({

                        icon: 'success',
                        title: '¡Éxito!',
                        text: json.aprendices,
                        showCancelButton: false,
                        showConfirmButton: true,
                        allowOutsideClick: false

                    }).then(() => {

                        location.reload()

                    })



                })
                .catch(error => {
                    Swal.fire({

                        icon: 'error',
                        title: 'Tienes un problema',
                        text: error

                    });
                });
        }
    } catch (error) {

        Swal.fire({

            icon: 'error',
            title: 'Tienes un problema',
            text: error

        });
    }






}

const editar_aprendiz = async (aprendiz) => {

    document.getElementById('_id').value = aprendiz._id
    document.getElementById('documento').value = aprendiz.documento
    document.getElementById('nombre').value = aprendiz.nombre
    document.getElementById('nota_1').value = aprendiz.nota_1
    document.getElementById('nota_2').value = aprendiz.nota_2
    document.getElementById('nota_3').value = aprendiz.nota_3

}

const registrar_aprendiz = async () => {


    const documento = document.getElementById('documento').value
    const nombre = document.getElementById('nombre').value
    const nota_1 = document.getElementById('nota_1').value
    const nota_2 = document.getElementById('nota_2').value
    const nota_3 = document.getElementById('nota_3').value


    let aprendiz = {

        documento: documento,
        nombre: nombre,
        nota_1: nota_1,
        nota_2: nota_2,
        nota_3: nota_3,


    }

    // Validaciones POST espacios 

    const ER_nombre = /^[A-Z0-9\s]+$/;

    try {
        if (documento === '' || nombre === '' || nota_1 === '' || nota_2 === '' || nota_3 === '') {

            throw 'No puede haber campos vacíos';

        } else if (!ER_nombre.test(nombre)) {

            throw 'El nombre del aprendiz no es válido';

        } else if (nota_1 < 0 ||  nota_1 > 5) {

            throw 'Nota debe ser entre 0 y 5';

        } else if (nota_2 < 0 ||  nota_2 > 5) {

            throw 'Nota debe ser entre 0 y 5';

        } else if (nota_3 < 0 ||  nota_3 > 5) {

            throw 'Nota debe ser entre 0 y 5';

        } else {

            fetch(url, {

                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(aprendiz),
                headers: { "Content-type": "application/json; charset=UTF-8" }

            })

                .then(response => response.json())
                .then(json => {

                    Swal.fire({

                        icon: 'success',
                        title: '¡Éxito!',
                        text: json.aprendices,
                        showCancelButton: false,
                        showConfirmButton: true,
                        allowOutsideClick: false

                    }).then(() => {

                        location.reload()

                    })



                })
                .catch(error => {
                    Swal.fire({

                        icon: 'error',
                        title: 'Tienes un problema',
                        text: error

                    });
                });
        }
    } catch (error) {

        Swal.fire({

            icon: 'error',
            title: 'Tienes un problema',
            text: error

        });
    }


}


const eliminar_aprendiz = (_id) => {


    Swal.fire({

        title: '¿Está seguro que quieres eliminar este item?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'Cancelar'

    }).then((result) => {

        if (result.isConfirmed) {
            // Captura de valores de datos enviados desde el formulario
            let aprendiz = {

                _id: _id

            };

            fetch(url, {

                method: 'DELETE',
                mode: 'cors',
                body: JSON.stringify(aprendiz),
                headers: { "Content-type": "application/json; charset=UTF-8" }

            })
                .then(response => response.json())
                .then(json => {

                    if (json.aprendiz) {

                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: json.mensaje
                        });

                    } else {

                        Swal.fire({
                            icon: 'success',
                            title: 'Eliminación Exitosa',
                            text: 'Se eliminó la reserva correctamente',
                        }).then(() => {

                            location.reload();

                        });

                    }
                });
        }
    });
}


const boton_crear = document.querySelector('#boton_crear').addEventListener('click', () => {

    registrar_aprendiz()

})







