<template>
    <div class="main">
        <!-- 头部 -->
        <header class="main-header">
            <div class="container">
                <a class="header-brand">
                    <img src="../assets/logo.png" alt="logo">TakeCloud
                </a>
                <div class="header-avator-con">
                    <message-tip v-model="mesCount" class="message-con"></message-tip>
                    <div class="user-dropdown-menu-con">
                        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                                <a href="javascript:void(0)" style="color:#333;">
                                    <span class="main-user-name">{{ userName }}</span>
                                    <Icon type="arrow-down-b"></Icon>
                                </a>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                    <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Avatar :src="avatorPath" class="user-avatar"></Avatar>
                        </Row>
                    </div>
                </div>
            </div>
        </header>
        <!-- 导航 -->
        <nav class="main-nav">
            <div class="container">
                <Menu mode="horizontal" theme="light" active-name="1" class="nav-menu">
                    <MenuItem name="1">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="settings"></Icon>
                        综合设置
                    </MenuItem>
                    <div class="nav-search">
                        <Input v-model="value14" icon="ios-search-strong" placeholder="搜索...." clearable style="width: 200px"></Input>
                    </div>
                </Menu>
            </div>
        </nav>
        <section class="main-con">
            <div class="container">
                <router-view/>
            </div>
        </section>
        <footer class="main-footer">
            <div class="container">
                <Footer class="main-footer-center">2018-2018 &copy; Theme by chaoshuai All rights reserved</Footer>
            </div>
        </footer>
    </div>
</template>
<script>
    import MessageTip from './main-components/MessageTip.vue'
    export default {
        components: {
            MessageTip
        },
        data() {
            return {
                avatorPath: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg',
                mesCount: 0,
                userName: 'chaoshuai'
            }
        },
        methods: {
            handleClickUserDropdown() {
                
            }
        },
        
    }
</script>

<style scoped lang="scss">
    @import "~styles/index.scss";
    %bg-border-styles{
        background-color: white;
        border-bottom: 1px solid $color-border;
    }
    .main{
        position: absolute;
        top: 0;
        width: 100%;
        background-color: $color-bg;
        .main-header{
            padding: 1rem 0;
            @extend %bg-border-styles;
            .header-brand{
                float: left;
                color: inherit;
                padding: 0;
                font-size: 1.25rem;
                height: 2rem;
                line-height: 2rem;
                font-weight: 600;
                transition: .3s opacity;
                &:hover{
                    opacity: .8;
                    color: inherit;
                    text-decoration: none;
                }
                img{
                    max-height: 100%;
                    display: inline-block;
                    vertical-align: bottom;
                    margin-right: .5rem;
                    width: auto;
                }
            }
            .header-avator-con{
                height: 2rem;
                line-height: 2rem;
                display: flex;
                justify-content: flex-end;
                .message-con{
                    width: 60px;
                    text-align: center;
                    cursor: pointer;
                }
                .main-user-name{
                    user-select: none;
                }
                .user-avatar{
                    margin: 0 .5rem;
                }
            }
        }
        .main-nav{
            @extend %bg-border-styles;
            display: flex;
            justify-content: space-between;
            .nav-menu{
                // border: none;
                .nav-search{
                    float: right;
                }
            }
        }
        .main-con{
            min-height: calc(100vh - 12.5rem );
        }
        .main-footer{
            @extend %bg-border-styles;
            border-top: 1px solid $color-border;
            .main-footer-center{
                background-color: inherit;
                text-align: center;
            }
        }
    }

</style>