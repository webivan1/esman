<?php 

namespace app\widgets\bootstrap;

use yii\base\InvalidCallException;
use \yii\helpers\Json;
use yii\helpers\Html;

class ActiveForm extends \yii\bootstrap\ActiveForm {
	public function run() {
    if (!empty($this->_fields))
      throw new InvalidCallException('Each beginField() should have a matching endField() call.');

    if ($this->enableClientScript) {
      $id = $this->options['id'];
      $options = Json::htmlEncode($this->getClientOptions());
      $attributes = Json::htmlEncode($this->attributes);
      $view = $this->getView();
      $view->registerJs("jQuery('#$id').yiiActiveForm($attributes, $options);");
    }

    echo Html::endForm();
	}
}