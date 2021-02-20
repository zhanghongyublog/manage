# 测试版

# 在 centos 下，可以使用 dos2unix 工具，解决 windows和linux sh \r 的问题

# ------------------ 更新项目文档 ------------------
echo '---- 更新项目文档 ----'

# 项目文档路径
APIDOC_PATH='../doc'

# 文档静态资源服务器路径
APIDOC_SERVER_PATH='/itc/www/html/apidoc/vas-ind-skills/'

# 如果 APIDOC_SERVER_PATH 目录不存在，则创建目录
if [ ! -d $APIDOC_SERVER_PATH  ];then
  echo create dir $APIDOC_SERVER_PATH
  mkdir $APIDOC_SERVER_PATH
fi

# 删除静态资源文档
rm -rf $APIDOC_SERVER_PATH/**
echo "delete apidoc: ${APIDOC_SERVER_PATH}"

# 编译静态资源文档
npx apidoc -i ../src -o $APIDOC_PATH/dist -c $APIDOC_PATH
echo "generate apidoc: ${APIDOC_PATH}/dist"

# 将本地项目的静态资源文档拷贝到服务器
cp -rf $APIDOC_PATH/dist/* $APIDOC_SERVER_PATH
echo "copy apidoc to ${APIDOC_SERVER_PATH}"

# ------------------------------------------------------


# ------------------ 启动项目 ------------------

echo '---- 启动项目 ----'

export NODE_CONFIG='{"ind_skills":{"db":{"password":"???"}}}'
npm run start:test

# ------------------------------------------------------


