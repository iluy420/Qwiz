using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Логика взаимодействия для Page1.xaml
    /// </summary>
    public class gg
    {
        public static int coun { get; set; } = 0;
        public int count  { get; set; } = coun;
        public gg()
        {
            coun++;
        }
        public gg(int a)
        {
            
        }

    }
    public partial class Page1 : Page
    {
        public Page1()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            if(opoi.IsChecked == true)
            {
                gg h = new gg();
            }
            NavigationService.Navigate(new Page2());
        }

       
    }
}
