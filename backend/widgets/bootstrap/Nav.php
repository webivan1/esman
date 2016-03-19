<?php 

namespace app\widgets\bootstrap;

class Nav extends \yii\bootstrap\Nav {
	public function run() {
    return $this->renderItems();
  }
}