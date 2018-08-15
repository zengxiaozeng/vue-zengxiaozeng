<template>
    <div>
    
        <div class="noticeDown" :class="{current:current}">
    
            <h4>提示</h4>
    
            <p>请至本地打开app参与活动！</p>
    
            <p>如未安装app，点击“去下载app”参与！</p>
    
            <ul class="clearfix">
    
                <li @click='cancel'>取消</li>
    
                <li @click='down'>去下载APP</li>
    
            </ul>
    
        </div>
    
        <div class="zezhao" v-if='current'></div>
    
    </div>
</template>


<script>
    import './judge.scss';
    
    
    export default {
    
    
        data: function() {
    
            return {
                current:false
    
            }
    
        },
    
        methods: {
    
            cancel: function() {
    
                this.current=false;
            },
    
            down: function() {
    
                this.current=false;
                
                window.location.href = config.originWeb+'/sms/download/link.html';
    
            }
    
        }
    
    }
</script>