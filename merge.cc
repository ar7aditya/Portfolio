#include<iostream>
using namespace std;
int main()
{
   int n1, n2,n3,j,i,temp;
   int ARR1[20];
   int ARR2[20];
   int ARR3[40];
   cin>>n1>>n2;
    cout<<"enter array 1 \n";
   for(i=0;i<n1;i++)
   {
      cin>>ARR1[i];
   }

   cout<<"enter array 2 \n";
    for(i=0;i<n2;i++)
   {
      cin>>ARR2[i];
   }

   for(i=0;i<n1;i++)
   {
      for(int j=i+1;j<n1;j++)
      {
      if(ARR1[i]>ARR1[j])
      {
            temp=ARR1[i];
				ARR1[i]=ARR1[j];
				ARR1[j]=temp;
      }
   }
   }

    for(i=0;i<n2;i++)
   {
      for(int j=i+1;j<n2;j++)
      {
      if(ARR2[i]>ARR2[j])
      {
            temp=ARR2[i];
				ARR2[i]=ARR2[j];
				ARR2[j]=temp;
      }
   }
   }
   cout<<"sorted array 1 -->  ";
   for(i=0;i<n1;i++){
      cout<<ARR1[i]<<" ";
   }
   cout<<'\n';
   cout<<"sorted array 2 -->  ";
   for(i=0;i<n2;i++){
      cout<<ARR2[i]<<" ";
   }
    for(i = 0; i < n1; i++)
  	{
      	ARR3[i] = ARR1[i];
  	}
  	
	n3 = n1 + n2;
 
 	for(i = 0, j = n1; j < n3 && i < n2; i++, j++)
  	{
  		ARR3[j] =ARR2[i];
  	}
     cout<<'\n';
      for(i=0;i<n3;i++)
   {
      for(int j=i+1;j<n3;j++)
      {
      if(ARR3[i]>ARR3[j])
      {
            temp=ARR3[i];
				ARR3[i]=ARR3[j];
				ARR3[j]=temp;
      }
   }
   }
   cout<<"merged sorted array -->  ";
   for(i=0;i<n3;i++){
      cout<<ARR3[i]<<" ";
   }
   
   
   return 0;
}
