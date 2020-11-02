<template>
  <div id="scroll-down-animation absolute">
    <span class="mouse">
      <span class="move"></span>
    </span>
    <h2>Scroll down</h2>
  </div>
</template>

<script>
export default {
  name: "scrolldown"
};
</script>

<style>
#scroll-down-animation {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

h2 {
  color: #4a5568;
  font-family: 'Roboto', 'Arial', sans-serif;
  font-weight: 200;
  font-size: 16px;
  text-align: center;
}

.mouse {
  margin: 0 auto;
  display: block;
  border-radius: 25px;
  border: 2px solid #4a5568;
  height: 40px;
  width: 25px;
  position: relative;
}

.move {
  position: absolute;
  background-color: #4a5568;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  animation: move 2s linear infinite;
}

@keyframes move {
  0% {
    transform: translate(-50%,5px);
    opacity: 0;
  }
  50% {
    transform: translate(-50%,20px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%,30px);
    opacity: 0;
  }
}
</style>