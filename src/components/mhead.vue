<template>
    <div class="mhead">
        <slot name="search"></slot>
        <slot name="icon"></slot>
        <slot name="conversation"></slot>
        <slot name="text"></slot>
        <slot name="back"></slot>
    </div>
</template>
<style>
.mhead {
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
	z-index: 1000;
}
.mhead .iconfont {
    font-size: 24px;
    margin-left: 3rem;
    color: #19be6b;
}
.icon-group {
    position: absolute;
    right: 1.5rem;
}
</style>