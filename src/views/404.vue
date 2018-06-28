<template>
    <div class="not-found">
        <div class="tip-message">
            
            <div class="message-title">
                404
            </div>
            <div class="message-desc">
                Oops.. You just found an error page..
            </div>
            <div class="message-options">
                <Button type="primary">回到首页</Button> 
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
@import "~styles/index.scss";
.not-found{
    @include fullScreen();
    .tip-message{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .message-title{
            @include etchedText();
            flex: 0 0 5rem;
            font-size: 40px;
        }
        .message-desc{
            flex: 0 0 3rem;
            font-size: 20px;
        }
        .message-options{
            flex: 0 0 3rem;
        }

    }
}

</style>