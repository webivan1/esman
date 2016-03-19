<?php 

namespace app\components;

class Controller extends \yii\web\Controller {
	public $enableCsrfValidation = false;
	public $layout = 'main';

	function beforeAction($action) {
		if (\yii::$app->request->isAjax) 
			$this->layout = 'main_js';

		return parent::beforeAction($action);
	}
}