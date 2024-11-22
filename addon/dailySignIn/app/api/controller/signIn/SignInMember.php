<?php
#######################################################################
# File Name: SignInMember.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/25 20:22
#######################################################################
namespace addon\dailySignIn\app\api\controller\signIn;
use addon\dailySignIn\app\service\api\SignInMemberService;
use addon\dailySignIn\utils\Utils;
use Carbon\Carbon;
use core\base\BaseApiController;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;

class SignInMember extends BaseApiController{

    public function getSignInList()
    {
        $response = (new SignInMemberService())->getMemberSigninList();
        return success('SUCCESS', $response);
    }
    public function signIn()
    {
        $response = (new SignInMemberService())->signIn();
        return success('SUCCESS',$response);
    }
    public function checkSignInStatus()
    {
        $response = (new SignInMemberService())->checkSignInStatus(
            $this->request->memberId()
        );
        return success('SUCCESS',$response);
    }
    public function isSignInOpen()
    {
        return success('SUCCESS', (new SignInMemberService())->getSignInOpen());
    }
    public function rewardRules()
    {
        return success('SUCCESS',(new SignInMemberService())->getRewardRules());
    }
    public function sum(){
        return success('SUCCESS',(new SignInMemberService())->sum([
            'accountType'=>$this->request['accountType'],
            'fromType'   =>$this->request['fromType']
        ]));
    }
    public function supplement(){
        $data = $this->request->params([
            [ "day", "" ],
        ]);
        $this->validate($data, 'addon\dailySignIn\app\validate\signIn\SupplementValidate.add');
        return success('SUCCESS',(new SignInMemberService())->supplement([
            'member_id'=>$this->request->memberId(),
            'day'=>$data['day']
        ]));
    }
}