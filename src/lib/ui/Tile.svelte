<script>
  export let image = null;
</script>

<div class="tile" style:background-image={image ? `url("${image}")` : null}>
  <div class="tile-gradient"/>
  <div class="tile-text">
    <slot/>
  </div>
</div>

<style>
  .tile {
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 200px;
    background-color: #ddd;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 30px;
  }
  .tile-text {
    background-color: rgba(0,0,0,0.4);
    color: #fff;
    padding: 0 8px 10px 8px;
    border-radius: 0 0 30px 30px;
  }
  .tile-gradient {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4));
    height: 40px;
  }
</style>