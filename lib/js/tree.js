var TreeView = function () {
    'use strict';
    return {
        init: function () {
            var DataSourceTree = function (options) {
                this._data = options.data;
                this._delay = options.delay;
            };
            DataSourceTree.prototype = {
                data: function (options, callback) {
                    var self = this;
                    setTimeout(function () {
                        var data = $.extend(true, [], self._data);
                        callback({
                            data: data
                        });
                    }, this._delay)
                }
            };
            var treeDataSource4 = new DataSourceTree({
                data: [{
                    name: '用户信息管理',
                    type: 'folder',
                    additionalParameters: {
                        id: 'F11',
                        name:{
                            "id":111,
                            type: 'folder',
                        },
                    },
                }, {
                    name: '组织架构管理',
                    type: 'folder',
                    additionalParameters: {
                        id: 'F12'
                    }
                }, {
                    name: '角色管理',
                    type: 'folder',
                    additionalParameters: {
                        id: 'I11'
                    }
                }, {
                    name: '权限管理',
                    type: 'folder',
                    additionalParameters: {
                        id: 'I12'
                    }
                }, {
                    name: '配置管理',
                    type: 'item',
                    additionalParameters: {
                        id: 'I12'
                    }
                },{
                    name: '元数据管理',
                    type: 'item',
                    additionalParameters: {
                        id: 'I12'
                    }
                }],
                delay: 400
            });

            $('#FlatTree4').tree({
                selectable: false,
                dataSource: treeDataSource4,
                loadingHTML: '<img src="../lib/img/input-spinner.gif"/>',
            });
        }
    };
}();