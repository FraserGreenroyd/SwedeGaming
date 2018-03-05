<?php include('../layout/header.html'); ?>

<div class="ng-hide" ng-show="isLoading"><span class="fa fa-spinner fa-pulse fa-5x fa-fw"></span></div>

<ng-include src="currentPage"></ng-include>

<?php include('../layout/footer.html'); ?>