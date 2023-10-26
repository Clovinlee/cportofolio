<template>
    <div id="load-screen" class="d-flex justify-content-center align-items-center h-100 w-100 position-absolute"
        style="z-index: 99;">
        <div class="d-flex justify-content-center align-items-center overflow-hidden load-indicator rounded"
            style="height:100px; width:100px; background-color: var(--darker-blue); box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;">
            <p style="font-weight: 700; font-size: 5rem;" class="m-0 p-0">C</p>
        </div>
    </div>
</template>

<style scoped>
#load-screen {
    background-color: var(--blue);
}
</style>