<?php 

namespace app\widgets\bootstrap;

use yii\helpers\ArrayHelper;
use yii\helpers\Html;

class NavBar extends \yii\bootstrap\NavBar {
	public function run() {
    $tag = ArrayHelper::remove($this->containerOptions, 'tag', 'div');
    echo Html::endTag($tag);
    if ($this->renderInnerContainer)
        echo Html::endTag('div');
    $tag = ArrayHelper::remove($this->options, 'tag', 'nav');
    echo Html::endTag($tag);
  }
}