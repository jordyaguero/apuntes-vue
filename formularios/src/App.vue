<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-6">
        <h1>Formulario</h1>
        <form action="#">
          <div class="form-group">
            <label for="nombre">Nombre</label>
            <!-- modificadores de v-model:
              v-model.trim="usuario.nombre" -> elimina todos los espacios de entrada delante y al final
              v-model.lazy="usuario.correo" -> no aparece hasta que hagamos click en otro campo
            -->
            <input v-model.trim="usuario.nombre" id="nombre" class="form-control" placeholder="Tu nombre">
          </div>
          <div class="form-group">
            <label for="correo">Correo</label>
            <input v-model.lazy="usuario.correo" id="correo" class="form-control" type="email" placeholder="Tu correo electronico">
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input v-model="usuario.contra" id="password" type="password" class="form-control" placeholder="Contraseña">
          </div>
          <div class="form-group">
            <label for="edad">Edad</label>
            <input v-model="usuario.edad" id="edad" class="form-control" type="number" min="0" max="100" value="0" placeholder="Tu edad">
          </div>
          <div class="form-group">
            <label for="pais">Tu país</label>
            <select v-model="usuario.pais" name="pais" id="pais" class="form-control">
              <option v-for="pais in paises">{{pais}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="mensaje">Mensaje</label>
            <textarea v-model="usuario.mensaje" name="mensaje" id="mensaje" class="form-control" cols="3"></textarea>
          </div>
          <fieldset class="form-group">
            <legend>Género</legend>
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="genero" value="hombre" checked
                      v-model="usuario.genero"> Hombre
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="radio" class="form-check-input" name="genero" value="mujer"
                        v-model="usuario.genero"> Mujer
              </label>
            </div>
          </fieldset>
          <div class="form-group">
            <div class="form-check">
              <label class="form-check-label">
                <input v-model="usuario.condiciones" type="checkbox" class="form-check-input" value="acepto"> Acepto las condiciones
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input v-model="usuario.condiciones" type="checkbox" class="form-check-input" value="new letters"> New letters
              </label>
            </div>
          </div>
          <!-- con .prevent, prevenimos que el boton envie informacion a otra pagina del servidor -->
          <button class="btn  btn-primary" type="submit"
              @click.prevent="enviarFormulario">Enviar</button>
        </form>
      </div>

      <div class="col-md-6" v-if="mostrar">
        <h2>Resultados</h2>
        <p> <strong> Nombre:  </strong> {{usuario.nombre}} </p>
        <p><strong>Correo electronico: </strong> {{usuario.correo}} </p>
        <p> <strong> Contraseña: </strong> {{usuario.contra}} </p>
        <p> <strong> Edad: </strong> {{usuario.edad}}</p>
        <p> <strong> País: </strong> {{usuario.pais}} </p>
        <p class="mensaje"> <strong> Mensaje: </strong> {{usuario.mensaje}}</p>
        <p> <strong> Género: </strong> {{usuario.genero}}</p>
        <p> <strong> Condiciones:  </strong> {{usuario.condiciones}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        nombre: '',
        correo: '',
        contra: '',
        edad: 0,
        pais: '',
        mensaje: '',
        genero: 'hombre',
        condiciones: []
      },
      mostrar: false,
      paises: ['peru','argentina','bolivia','brasil','usuguay','chile','colombia']
    }
  },
  methods: {
    enviarFormulario() {
      this.mostrar = true;
    }
  }
}
</script>

<style>

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  .mensaje {
    white-space: pre;
  }
</style>
