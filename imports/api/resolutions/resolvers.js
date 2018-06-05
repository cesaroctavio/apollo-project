import Resolutions from './resolutions';


const res = Resolutions.find({}).fetch();
console.log(res);

export default {
  Query:{
    resolutions(){
      return res;
    }
  },

  Mutation:{
    createResolution(obj,{name},context){
      //console.log("got there");
      const resolutionsId=Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionsId);
    }
  }
};
