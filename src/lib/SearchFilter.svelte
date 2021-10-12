<script>
  export let items;
</script>


<input type="text">

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>