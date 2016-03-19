<?php $this->beginPage() ?>
<?php $this->beginBody() ?>
<div class="container">
    <?= \yii\widgets\Breadcrumbs::widget([
        'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
    ]) ?>
    <?= $content ?>
</div>
<?php $this->endBody() ?>
<?php $this->endPage() ?>
