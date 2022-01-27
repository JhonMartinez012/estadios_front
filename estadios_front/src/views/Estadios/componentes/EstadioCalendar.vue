<template>
  <div class="container-fluid">
    <h2 class="bold">Motivos de inactividad</h2>
    <div class="row calendario">
      <div class="meses col-md-4 col-sm-6">
        <label class="mes-nombre">Febrero 2022</label>
        <ol>
          <li class="dia-nombre">L</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">J</li>
          <li class="dia-nombre">V</li>
          <li class="dia-nombre">S</li>
          <li class="dia-nombre">D</li>

          <li class="otro-mes">31</li>
          <li class="dias" @click="hola">1</li>
          <li class="dias">2</li>
          <li class="dias">3</li>
          <li class="dias">4</li>
          <li class="dias">5</li>
          <li class="dias">6</li>
          <li class="dias">7</li>
          <li class="dias">8</li>
          <li class="dias">9</li>
          <li class="dias">10</li>
          <li class="dias">11</li>
          <li class="dias">12</li>
          <li class="dias">13</li>
          <li class="dias">14</li>
          <li class="dias">15</li>
          <li class="dias">16</li>
          <li class="dias">17</li>
          <li class="dias">18</li>
          <li class="dias">19</li>
          <li class="dias">20</li>
          <li class="dias">21</li>
          <li class="dias">22</li>
          <li class="dias">23</li>
          <li class="dias">24</li>
          <li class="dias">25</li>
          <li class="dias">26</li>
          <li class="dias">27</li>
          <li class="dias">28</li>
          <li class="otro-mes">1</li>
          <li class="otro-mes">2</li>
          <li class="otro-mes">3</li>
          <li class="otro-mes">4</li>
          <li class="otro-mes">5</li>
          <li class="otro-mes">6</li>
        </ol>
      </div>
      <div class="meses col-md-4 col-sm-6">
        <label class="mes-nombre">Marzo 2022</label>
        <ol>
          <li class="dia-nombre">L</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">J</li>
          <li class="dia-nombre">V</li>
          <li class="dia-nombre">S</li>
          <li class="dia-nombre">D</li>

          <li class="otro-mes">28</li>
          <li class="dias" @click="hola">1</li>
          <li class="dias">2</li>
          <li class="dias">3</li>
          <li class="dias">4</li>
          <li class="dias">5</li>
          <li class="dias">6</li>
          <li class="dias">7</li>
          <li class="dias">8</li>
          <li class="dias">9</li>
          <li class="dias">10</li>
          <li class="dias">11</li>
          <li class="dias">12</li>
          <li class="dias">13</li>
          <li class="dias">14</li>
          <li class="dias">15</li>
          <li class="dias">16</li>
          <li class="dias">17</li>
          <li class="dias">18</li>
          <li class="dias">19</li>
          <li class="dias">20</li>
          <li class="dias">21</li>
          <li class="dias">22</li>
          <li class="dias">23</li>
          <li class="dias">24</li>
          <li class="dias">25</li>
          <li class="dias">26</li>
          <li class="dias">27</li>
          <li class="dias">28</li>
          <li class="dias">29</li>
          <li class="dias">30</li>
          <li class="dias">31</li>
          <li class="otro-mes">1</li>
          <li class="otro-mes">2</li>
          <li class="otro-mes">3</li>
          <li class="otro-mes">4</li>
          <li class="otro-mes">5</li>
          <li class="otro-mes">6</li>
          <li class="otro-mes">7</li>
          <li class="otro-mes">8</li>
          <li class="otro-mes">9</li>
          <li class="otro-mes">10</li>

        </ol>
      </div>
      <div class="meses col-md-4 col-sm-6">
        <label class="mes-nombre">Abril 2022</label>
        <ol>
          <li class="dia-nombre">L</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">M</li>
          <li class="dia-nombre">J</li>
          <li class="dia-nombre">V</li>
          <li class="dia-nombre">S</li>
          <li class="dia-nombre">D</li>

          <li class="otro-mes">28</li>
          <li class="otro-mes">29</li>
          <li class="otro-mes">30</li>
          <li class="otro-mes">31</li>
          <li class="dias" @click="hola">1</li>
          <li class="dias">2</li>
          <li class="dias">3</li>
          <li class="dias">4</li>
          <li class="dias">5</li>
          <li class="dias">6</li>
          <li class="dias">7</li>
          <li class="dias">8</li>
          <li class="dias">9</li>
          <li class="dias">10</li>
          <li class="dias">11</li>
          <li class="dias">12</li>
          <li class="dias">13</li>
          <li class="dias">14</li>
          <li class="dias">15</li>
          <li class="dias">16</li>
          <li class="dias">17</li>
          <li class="dias">18</li>
          <li class="dias">19</li>
          <li class="dias">20</li>
          <li class="dias">21</li>
          <li class="dias">22</li>
          <li class="dias">23</li>
          <li class="dias">24</li>
          <li class="dias">25</li>
          <li class="dias">26</li>
          <li class="dias">27</li>
          <li class="dias">28</li>
          <li class="dias">29</li>
          <li class="dias">30</li>
          <li class="otro-mes">1</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hola() {
      console.log("hola");
    },
  },
};
</script>

<style scoped>
.calendario {
  text-align: center;
}
ol {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0;
}
li {
  text-align: center;
}

.dias {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.dia-nombre {
  width: 100%;
  height: 50px;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
}
.otro-mes {
  width: 100%;
  height: 50px;
  background: #f2f2f2;
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
  color: #aaaaaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mes-nombre {
  background: #7358fa;
  width: 100%;
  font-family: Arial;
  font-size: 27px;
  margin: 0em;
  color: #ebebeb;
}
.meses{
  display: block;
  padding: auto;
  width: 350px;
  
}
</style>
