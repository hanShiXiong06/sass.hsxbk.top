<?php
#######################################################################
# File Name: SignInValidate.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/24 17:54
#######################################################################
namespace addon\dailySignIn\app\adminapi\controller\signIN;
use addon\dailySignIn\app\service\admin\SignInService;
use addon\dailySignIn\app\service\core\CoreSignInService;
use core\base\BaseAdminController;

class SignIn extends BaseAdminController{

    public function index(): \think\Response{
        return success('SUCCESS', (new CoreSignInService())->getConfig());
    }
    public function create(): \think\Response{
        $data = $this->request->params([
            [ "status", "" ],
            [ "cycle", "" ],
            [ "point", "" ],
            [ "growth", "" ],
            ['isSupplement',""],
            ["adUnitId",""],
            [ "data", [] ]
        ]);
        $this->validate($data, 'addon\dailySignIn\app\validate\signIn\SignInValidate.add');
        $response = (new SignInService())->create($data);
        return success('SUCCESS',$response);
    }
}