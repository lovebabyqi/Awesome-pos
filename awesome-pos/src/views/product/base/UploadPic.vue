<template>
    <div id="upload-image">
        <el-upload
                list-type="picture-card"
                :auto-upload="true"
                action="/img/upload"
                :show-file-list="true"
                :accept="'image/*'"
                :name="'image'"
                ref="upload"
                :file-list="fileList"
                :on-success="handleSuccess"
                :on-progress="handleProgress"
                :limit='1'
        >

            <div class="el-upload__text" >
                <em v-if="this.imgUrl">仅能保存一张</em>
                <em v-else><i class="el-icon-plus"></i>上传图片</em>
            </div>
            <div slot="file" slot-scope="{file}" >
                <img
                        class="el-upload-list__item-thumbnail"
                        :src="imgUrl" alt="">
                <span class="el-upload-list__item-actions">
                    <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview(file)"
                    >
                      <i class="el-icon-zoom-in"></i>
                    </span>
                    <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove(file)"
                    >
                      <i class="el-icon-delete"></i>
                    </span>
                </span>
            </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>
</template>

<script>
    import {reqDeleteImg} from "../../../api";
    import {Message} from 'element-ui'

    export default {
        name: "UploadPic",
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                disabled: false,
                imgUrl: '',
                fileList:[],
            };
        },
        mounted() {
            this.$bus.$on('updateProduct', (product) => {
                this.fileList = [{name:'food.jpg',url:product.imgUrl}]
                this.imgUrl = product.imgUrl
            })
        },
        methods: {
            async handleRemove(file) {  //删除图片
                const result = reqDeleteImg({filename: this.imgUrl})
                const {status, msg} = result;
                this.fileList.pop();
                this.imgUrl = ''
                if (status === 0) {
                    Message({
                        message: msg,
                        type: 'success'
                    })
                } else {
                    Message({
                        message: '图片已删除,勿重复操作',
                        type: 'error'
                    })
                }
            },
            handlePictureCardPreview(file) {    //查看图片
                this.dialogImageUrl = this.imgUrl;
                this.dialogVisible = true;
            },
            handleSuccess(response, file, fileList) {
                Message({
                    message: response.msg,
                    type: 'success'
                });
                this.imgUrl = response.data.url
            },
            handleProgress(event, file, fileList) {
                this.loading = true;  //  上传时执行loading事件
            },
            initUrl() {
                this.imgUrl = ''
                this.$refs.upload.clearFiles()
            }
        }
    }
</script>

<style scoped>

</style>