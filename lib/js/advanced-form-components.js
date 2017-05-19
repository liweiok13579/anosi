$(function () {
    //孔凡奇专属
    $('#my_multi_select3').multiSelect({
        selectableHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='搜索'>",
        selectionHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='搜索'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id')
                    + ' .ms-elem-selectable:not(.ms-selected)';
            that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function (e) {
             if (e.which === 40) {
             that.$selectableUl.focus();
             return false;
             }
             });
        },
        // 左移右
        afterSelect: function () {
            this.qs1.cache();
        },
        // 右移左
        afterDeselect: function () {
            this.qs1.cache();


        }
    });
    //4 5 6 李伟专属 别动！！！！
    $('#my_multi_select4').multiSelect({
        selectableHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='当前尚未拥有的角色'>",
        selectionHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='当前拥有的角色'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id')
                    + ' .ms-elem-selectable:not(.ms-selected)';
            that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function (e) {
                if (e.which === 40) {
                    that.$selectableUl.focus();
                    return false;
                }
            });
        },
        // 左移右
        afterSelect: function () {
            this.qs1.cache();
        },
        // 右移左
        afterDeselect: function () {
            this.qs1.cache();


        }
    });
    $('#my_multi_select5').multiSelect({
        selectableHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='未拥有此权限的员工'>",
        selectionHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='拥有此权限的员工'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id')
                    + ' .ms-elem-selectable:not(.ms-selected)';
            that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function (e) {
                if (e.which === 40) {
                    that.$selectableUl.focus();
                    return false;
                }
            });
        },
        // 左移右
        afterSelect: function () {
            this.qs1.cache();
        },
        // 右移左
        afterDeselect: function () {
            this.qs1.cache();


        }
    });
    $('#my_multi_select6').multiSelect({
        selectableHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='搜索'>",
        selectionHeader: "<input type='text' " +
        "class='form-control search-input' " +
        "autocomplete='off' placeholder='搜索'>",
        afterInit: function (ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id')
                    + ' .ms-elem-selectable:not(.ms-selected)';
            that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function (e) {
                if (e.which === 40) {
                    that.$selectableUl.focus();
                    return false;
                }
            });
        },
        // 左移右
        afterSelect: function () {
            this.qs1.cache();
        },
        // 右移左
        afterDeselect: function () {
            this.qs1.cache();


        }
    });
})